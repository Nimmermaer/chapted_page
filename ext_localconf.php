<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}
$boot = function ($extensionKey) {
	\TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
		'ChaptedTeam.' . $extensionKey,
		'Chaptedpage',
		array(),
		// non-cacheable actions
		array()
	);
	if (TYPO3_MODE === 'BE') {
		$backendLayoutFileProviderDirectory = \TYPO3\CMS\Core\Utility\GeneralUtility::getFileAbsFileName(
			'EXT:chapted_page/Configuration/TypoScript/Setup/Backendlayouts'
		);
		$beFiles                            = \TYPO3\CMS\Core\Utility\GeneralUtility::getFilesInDir($backendLayoutFileProviderDirectory,
			'ts');
		foreach ($beFiles as $beLayoutFileName) {
			$beLayoutPath = $backendLayoutFileProviderDirectory . DIRECTORY_SEPARATOR . $beLayoutFileName;
			\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(file_get_contents($beLayoutPath));
		}

	}
};
$boot($_EXTKEY);
unset( $boot );
