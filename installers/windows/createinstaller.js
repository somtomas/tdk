const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  console.log('creating windows installer')
  const rootPath = path.join('./')
  const outPath = path.join(rootPath, 'release-builds')

  return Promise.resolve({
    appDirectory: path.join(outPath, 'TDK_0-win32-ia32/'),
    authors: 'TDK',
    noMsi: false,
    outputDirectory: path.join(outPath, 'windows-installer'),
    exe: 'TDK_0.exe',
    setupExe: 'TDK_Installer.exe',
    setupIcon: path.join(rootPath, 'icon', 'win', 'icon.ico')
  })
}