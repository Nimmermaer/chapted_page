tt_content.gridelements_pi1.20.10.setup.grid-50-50 {
    columns {
        20 {
            renderObj =< tt_content
            wrap = <div class=" col-md-4">|</div>
        }

        21 {
            renderObj =< tt_content
            wrap = <div class=" col-md-4">|</div>
        }
    }

    wrap = <div id="service"><div class="container"><div class="row centered">|</div></div></div>
    prepend < lib.stdheader
}