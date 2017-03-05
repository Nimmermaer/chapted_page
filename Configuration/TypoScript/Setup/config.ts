config {
    additionalHeaders.10 {
        header = Content-Type:text/html;charset=utf-8
        replace = 0
        httpResponseCode = 401
    }

    doctype = html5
    disableAllHeaderCode = 0

    sendCacheHeaders = 1

    renderCharset = utf-8
    metaCharset = utf-8

    notification_email_urlmode = all
    notification_email_encoding = quoted-printable
    notification_email_charset = utf-8

    formMailCharset = utf-8

    spamProtectEmailAddresses = 2
    spamProtectEmailAddresses_atSubst = (at)

    disablePrefixComment = 1

    sys_language_uid = 0
    language = de
    locale_all = de_DE
    htmlTag_langKey = de
    stdWrap.strftime = %A, %e. %B %Y

    linkVars = L 1

    uniqueLinkVars = 1

    noPageTitle = 1

    absRefPrefix = /
    prefixLocalAnchors = all

    simulateStaticDocuments = 0
    tx_realurl_enable = 1

    index_enable = 1
    index_metatags = 1
}

lib.stdheader.stdWrap.dataWrap >
config.tx_realurl_enable = 0
config.prefixLocalAnchors = 0

lib.canonical = TEXT
lib.canonical {
    typolink {
        parameter = {page:uid}
        parameter.insertData = 1
        useCacheHash = 1
        addQueryString = 1
        addQueryString.method = GET
        addQueryString.exclude = id,no_cache
        returnLast = url
        forceAbsoluteUrl = 1
    }

    wrap = <link rel="canonical" href="|" />
}

lib.pagetitle = TEXT
lib.pagetitle {
    data = page:title
    wrap = <h1>|</h1>
}

lib.backgroundimage = IMG_RESOURCE
lib.backgroundimage {
    file {
        import = uploads/media/
        import.data = levelmedia:-1, slide
        treatIdAsReference = 1
        import.listNum = 0
    }
}

page.headerData.13 < lib.backgroundimage
page.headerData.13.stdWrap.wrap = <style type="text/css">header{ background-image: url(|); }</style>

lib.copyright = TEXT
lib.copyright {
    data = date:U
    strftime = %Y
    wrap = Copyright © &nbsp; |  &nbsp;Fischerpruefung Laufen
}

lib.titleSectionId = TEXT
lib.titleSectionId {
    field = title
    trim = 1
    case = lower
    replacement {
        10 {
            search.char = 32
            replace = -
        }

        20 {
            search = /(ä|Ä)/
            useRegExp = 1
            replace = ae
        }

        30 {
            search = /(ö|Ö)/
            useRegExp = 1
            replace = oe
        }

        40 {
            search = /(ü|Ü)/
            useRegExp = 1
            replace = ue
        }

        50 {
            search = ß
            replace = ss
        }

        60 {
            search = /\/\\\.\:\;\,\&/
            useRegExp = 1
            replace =
        }
    }
}
