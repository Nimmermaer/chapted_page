
plugin.tx_chaptedpage {
    view {
        templateRootPaths.0 = {$plugin.tx_chaptedpage.view.templateRootPath}
        partialRootPaths.0 = {$plugin.tx_chaptedpage.view.partialRootPath}
        layoutRootPaths.0 = {$plugin.tx_chaptedpage.view.layoutRootPath}
    }
    persistence {
        storagePid = {$plugin.tx_chaptedpage.persistence.storagePid}
    }
}

plugin.tx_chaptedpage._CSS_DEFAULT_STYLE (
	textarea.f3-form-error {
		background-color:#FF9F9F;
		border: 1px #FF0000 solid;
	}

	input.f3-form-error {
		background-color:#FF9F9F;
		border: 1px #FF0000 solid;
	}

	.tx-chapted-page table {
		border-collapse:separate;
		border-spacing:10px;
	}

	.tx-chapted-page table th {
		font-weight:bold;
	}

	.tx-chapted-page table td {
		vertical-align:top;
	}

	.typo3-messages .message-error {
		color:red;
	}

	.typo3-messages .message-ok {
		color:green;
	}

)
