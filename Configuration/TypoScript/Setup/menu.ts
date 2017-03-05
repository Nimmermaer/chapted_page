lib.mainmenu = HMENU
lib.mainmenu {
    wrap = <div id="bs-example-navbar-collapse-1" class="collapse navbar-collapse">|</div>
    1 = TMENU
    1 {
        wrap = <ul class="nav navbar-nav navbar-right">|</ul>
        NO = 1
        NO {
            doNotLinkIt = 1
            linkWrap = <li class="link">|</li>
            stdWrap >
            stdWrap {
                cObject = TEXT
                cObject {
                    field = title // title
                    typolink {
                        parameter = 1
                        ATagParams = class="page-scroll"
                        section.cObject < lib.titleSectionId
                    }
                }
            }
        }
    }
}