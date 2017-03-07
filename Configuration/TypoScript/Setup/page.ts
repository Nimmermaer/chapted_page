lib.sectionContent = HMENU
lib.sectionContent {
    special = directory
    special.value = 1
    1 = TMENU
    1 {
        NO = 1
        NO {
            doNotLinkIt = 1
            stdWrap {
                cObject = COA
                cObject {
                    10 = COA
                    10 {
                        10 < lib.titleSectionId
                        10.noTrimWrap  (
                       |<section id="|" class="download bg-primary text-center |
                        )

                        # Hier wird der Hintergrund eingebunden
                        20 = FILES
                        20 {
                            references {
                                table = pages
                                uid.field = uid
                                fieldName = media
                            }

                            maxItems = 1
                            renderObj = IMG_RESOURCE
                            renderObj {
                                file.import.data = file:current:uid
                                file.treatIdAsReference = 1
                                stdWrap.wrap = backgroundImage" style="background-image: url('|');position: relative;padding: 250px 0;background-position: center;background-size: cover;
                            }

                        }
                        30 = TEXT
                        30.value (
                             ">
                        <div class="container">
                            <div class="row">

                        )
                    }
                    20 = CONTENT
                    20 {
                        wrap = |

                        table = tt_content
                        select {
                            pidInList.field = uid
                            # damit es mit gridelements funktioniert:
                            andWhere.dataWrap = tx_gridelements_container=0
                            orderBy = sorting
                        }

                        renderObj =< tt_content
                    }

                    30 = TEXT
                    30 {
                        wrap (

                               </div>
                            </div>
                          <div class="overlay"></div>
                          </section>
                        )
                    }
                }
            }
        }

        CUR = 1
        CUR < .NO
    }

    2 < .1
}

page = PAGE
page {
    typeNum = 0
    10 =< lib.templates.base

    shortcutIcon = EXT:chapted_page/Resources/Public/img/favicon.ico
    headerData {
        10 = TEXT
        10 {
            field = title
            noTrimWrap = |<title> | </title>|
        }
        990 < lib.canonical
    }
    meta {
        description {
            data = page:description
            ifEmpty.data = levelfield :-1, description, slide
        }
        keywords {
            data = page:keywords
            ifEmpty.data = levelfield :-1, keywords, slide
        }

        author{
            data = page:author
            ifEmpty.data = levelfield:-1, author, slide
        }
        abstract{
            data = page:abstract
            data = levelfield:-1, abstract, slide
        }
        date {
            data = page:SYS_LASTCHANGED // page:crdate
            date = Y-m-d
        }
        robots = INDEX,FOLLOW
        viewport = width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no
    }

    bodyTag >
    bodyTagCObject = COA
    bodyTagCObject {
        10 = TEXT
        10.field = uid
        10.wrap = <body id="page-top" class="nojs page-|">
    }
}

