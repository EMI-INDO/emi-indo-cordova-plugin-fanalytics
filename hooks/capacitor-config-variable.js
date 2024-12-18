const fs = require('fs');
const path = require('path');
const plist = require('plist');

const configPath = path.join(process.cwd(), 'capacitor.config.json');
const androidPlatformPath = path.join(process.cwd(), 'android');
const iosPlatformPath = path.join(process.cwd(), 'ios');
const infoPlistPath = path.join(process.cwd(), 'ios', 'App', 'App', 'Info.plist');
const pluginPath = path.join(process.cwd(), 'node_modules', 'emi-indo-cordova-plugin-fanalytics', 'plugin.xml');

function readJSON(filePath) {
    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        process.exit(1);
    }
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(content);
    } catch (error) {
        console.error(`Error reading or parsing ${filePath}:`, error);
        process.exit(1);
    }
}


function updateInfoPlist() {
    if (!fs.existsSync(iosPlatformPath)) {
        console.error(`iOS platform folder not found at: ${iosPlatformPath}`);
        return;
    }

    if (!fs.existsSync(infoPlistPath)) {
        console.error(`Info.plist not found at: ${infoPlistPath}`);
        return;
    }

    const capacitorConfig = readJSON(configPath);
    const analyticsConfig = capacitorConfig.plugins && capacitorConfig.plugins.Analytics;
    if (!analyticsConfig) {
        console.error('Analytics plugin configuration not found in capacitor.config.json');
        return;
    }

    try {
        const plistContent = fs.readFileSync(infoPlistPath, 'utf8');
        const plistData = plist.parse(plistContent);

        const mapping = {
            'FIREBASE_ANALYTICS_COLLECTION_ENABLED': analyticsConfig.ANALYTICS_COLLECTION_ENABLED,
            'FirebaseAutomaticScreenReportingEnabled': analyticsConfig.AUTOMATIC_SCREEN_REPORTING_ENABLED,
            'GOOGLE_ANALYTICS_DEFAULT_ALLOW_ANALYTICS_STORAGE': analyticsConfig.DEFAULT_ALLOW_ANALYTICS_STORAGE,
            'GOOGLE_ANALYTICS_DEFAULT_ALLOW_AD_STORAGE': analyticsConfig.DEFAULT_ALLOW_AD_STORAGE,
        };

        Object.keys(mapping).forEach(parentKey => {
            if (typeof mapping[parentKey] !== 'undefined') {
                plistData[parentKey] = mapping[parentKey] === 'true' ? true : false;
                console.log(`Updated ${parentKey} to ${mapping[parentKey]} in Info.plist`);
            } else {
                console.warn(`Key ${parentKey} not found in analyticsConfig`);
            }
        });

        const updatedPlistContent = plist.build(plistData);
        fs.writeFileSync(infoPlistPath, updatedPlistContent, 'utf8');
        console.log('Successfully updated Info.plist');
    } catch (error) {
        console.error(`Error updating Info.plist:`, error);
    }
}


function updatePluginXml() {
    if (!fs.existsSync(androidPlatformPath)) {
        console.error(`Android platform folder not found at: ${androidPlatformPath}`);
        return;
    }

    if (!fs.existsSync(pluginPath)) {
        console.error(`plugin.xml not found at: ${pluginPath}`);
        return;
    }

    const capacitorConfig = readJSON(configPath);
    const analyticsConfig = capacitorConfig.plugins && capacitorConfig.plugins.Analytics;
    if (!analyticsConfig) {
        console.error('Analytics plugin configuration not found in capacitor.config.json');
        return;
    }

    try {
        let pluginContent = fs.readFileSync(pluginPath, 'utf8');

        const mapping = {
            'ANALYTICS_COLLECTION_ENABLED': analyticsConfig.ANALYTICS_COLLECTION_ENABLED,
            'AUTOMATIC_SCREEN_REPORTING_ENABLED': analyticsConfig.AUTOMATIC_SCREEN_REPORTING_ENABLED,
            'DEFAULT_ALLOW_ANALYTICS_STORAGE': analyticsConfig.DEFAULT_ALLOW_ANALYTICS_STORAGE,
            'DEFAULT_ALLOW_AD_STORAGE': analyticsConfig.DEFAULT_ALLOW_AD_STORAGE,
        };

        Object.keys(mapping).forEach(preferenceName => {
            const preferenceValue = mapping[preferenceName] === 'true' ? 'true' : 'false'; 
            const preferenceTag = `<preference name="${preferenceName}" default="${preferenceValue}" />`;

            const regex = new RegExp(`<preference name="${preferenceName}"[\s\S]*?/>`, 'g');
            if (pluginContent.match(regex)) {
                pluginContent = pluginContent.replace(regex, preferenceTag);
                console.log(`Updated ${preferenceName} to ${preferenceValue} in plugin.xml`);
            } else {
                pluginContent = pluginContent.replace('</platform>', `${preferenceTag}\n    </platform>`);
                console.log(`Inserted ${preferenceName} with value ${preferenceValue} in plugin.xml`);
            }
        });

        fs.writeFileSync(pluginPath, pluginContent, 'utf8');
        console.log('Successfully updated plugin.xml');
    } catch (error) {
        console.error(`Error updating plugin.xml:`, error);
    }
}

function main() {
    updateInfoPlist();
    updatePluginXml();
}

main();
