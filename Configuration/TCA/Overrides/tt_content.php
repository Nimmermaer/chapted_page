<?php


if ( ! defined('TYPO3_MODE')) {
    die( 'Access denied.' );
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
    'tt_content',
    'header',
    '--linebreak--,subheader;LLL:EXT:cms/locallang_ttc.xlf:subheader_formlabel',
    'after:header'
);