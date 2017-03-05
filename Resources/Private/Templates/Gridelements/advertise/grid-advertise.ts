tt_content.gridelements_pi1.20.10.setup.grid-advertise {
    columns {
        20 {
            renderObj =< tt_content
            wrap (
            <div class="col-md-8">
            <div class="container-fluid">

            <div class="row"><div class="col-md-6 20">|</div>

           )
        }

        21 {
            renderObj =< tt_content
            wrap = <div class="col-md-6 21">|</div></div>
        }

        22 {
            renderObj =< tt_content
            wrap = <div class="row"><div class="col-md-6 22">|</div>
        }

        23 {
            renderObj =< tt_content
            wrap = <div class="col-md-6 23">|</div></div></div></div>
        }
        24 {
            renderObj =< tt_content
            wrap = <div class="col-md-4 24">|</div>
        }
    }

    wrap (
    <div class="container">
     <div class="row">
        <div class="col-lg-12 text-center">
            <div class="section-heading">
                <h2>{field:header}</h2>
            <p class="text-muted">{field:subtitle}</p>
            <hr>
        </div>
    </div>
</div>
<div class="row">|</div></div></div>
    )
    wrap.insertData = 1
}

