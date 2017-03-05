temp.typo3searchWrap = <!--TYPO3SEARCH_begin-->|<!--TYPO3SEARCH_end-->
# Column configuration
lib {
    contents {
        columns {
            special = COA
            special {
                20 < styles.content.get
                20.select.where = colPos=1
                20.wrap < temp.typo3searchWrap
                20.slide = -1
            }

            footerLeft = COA
            footerLeft {
                20 < styles.content.get
                20.select.where = colPos=2
                20.wrap < temp.typo3searchWrap
                20.slide = -1
            }

            footerMiddle = COA
            footerMiddle {
                20 < styles.content.get
                20.select.where = colPos=3
                20.wrap < temp.typo3searchWrap
                20.slide = -1
            }

            footerRight = COA
            footerRight {
                20 < styles.content.get
                20.select.where = colPos=4
                20.wrap < temp.typo3searchWrap
                20.slide = -1
            }
        }
    }
}
