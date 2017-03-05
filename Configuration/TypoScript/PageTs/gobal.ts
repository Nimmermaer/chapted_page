TCEFORM {
    pages {
        layout.disabled = 1
        backend_layout.removeItems = -1
        backend_layout_next_level.removeItems = -1
    }

    tt_content {
        imagewidth.disabled = 1
        imageheight.disabled = 1
        imageborder.disabled = 1
        imagecols.disabled = 1
        header_position.disabled = 1
        date.disabled = 1
        imageorient {
            removeItems = 1,2,9,10,17,18
        }

        layout {
            altLabels {
                2 = Comments
                3 = Team members
            }
            removeItems = 1
            addItems {
                4 = Social links
                5 = Service
            }
        }

        header_layout {
            altLabels {
                0 = Default
                1 = H1
                2 = H2
                3 = H3
                4 = H4
                5 = H5
                7 = H4 underline
                100 = Versteckt
            }
            addItems {
                7 = H4 underline
            }
        }
    }
}

