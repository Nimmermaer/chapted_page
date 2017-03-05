<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}
$boot = function ($extensionKey) {
	\TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
		'ChaptedTeam.' . $extensionKey,
		'Chaptedpage',
		'chapted_page'
	);

	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extensionKey, 'Configuration/TypoScript',
		'Chapted Page');
};
$boot($_EXTKEY);
unset( $boot );

