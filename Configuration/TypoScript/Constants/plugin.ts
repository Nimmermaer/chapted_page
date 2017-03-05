plugin.tx_chaptedpage {
    view {
        # cat=plugin.tx_chaptedpage_chaptedpage/file; type=string; label=Path to template root (FE)
        templateRootPath = EXT:chapted_page/Resources/Private/Templates/
        # cat=plugin.tx_chaptedpage_chaptedpage/file; type=string; label=Path to template partials (FE)
        partialRootPath = EXT:chapted_page/Resources/Private/Partials/
        # cat=plugin.tx_chaptedpage_chaptedpage/file; type=string; label=Path to template layouts (FE)
        layoutRootPath = EXT:chapted_page/Resources/Private/Layouts/
    }
    persistence {
        # cat=plugin.tx_chaptedpage_chaptedpage//a; type=string; label=Default storage PID
        storagePid =
    }
}
