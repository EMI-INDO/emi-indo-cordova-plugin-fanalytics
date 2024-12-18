const fs = require('fs');
const path = require('path');

const rootPath = path.join(process.cwd(), 'www');
const androidSourcePath = path.join(rootPath, 'google-services.json');
const iosSourcePath = path.join(rootPath, 'GoogleService-Info.plist');

const androidPlatformPath = path.join(process.cwd(), 'android');
const androidTargetPath = path.join(androidPlatformPath, 'app', 'google-services.json');
const iosPlatformPath = path.join(process.cwd(), 'ios');
const iosTargetPath = path.join(iosPlatformPath, 'App', 'App', 'GoogleService-Info.plist');


function copyFile(source, target) {
    if (!fs.existsSync(source)) {
        console.error(`Source file not found: ${source}`);
        return;
    }

    try {
        fs.copyFileSync(source, target);
        console.log(`Successfully copied ${path.basename(source)} to ${target}`);
    } catch (error) {
        console.error(`Failed to copy file from ${source} to ${target}:`, error);
    }
}


function runHook() {
    console.log('Starting Capacitor hook to copy Google service files...');

    let platformAvailable = false;

    if (fs.existsSync(androidPlatformPath)) {
        console.log('Copying google-services.json to Android...');
        copyFile(androidSourcePath, androidTargetPath);
        platformAvailable = true;
    } else {
        console.warn('Android platform not found. Ensure the android folder exists.');
    }

    if (fs.existsSync(iosPlatformPath)) {
        console.log('Copying GoogleService-Info.plist to iOS...');
        copyFile(iosSourcePath, iosTargetPath);
        platformAvailable = true;
    } else {
        console.warn('iOS platform not found. Ensure the ios folder exists.');
    }

    if (!platformAvailable) {
        console.error('No platform found. No files were copied.');
    } else {
        console.log('Capacitor hook finished running.');
    }
}

runHook();
