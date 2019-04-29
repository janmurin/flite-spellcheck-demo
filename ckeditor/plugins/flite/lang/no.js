CKEDITOR.plugins.setLang( 'flite', 'no', {
    TOGGLE_TRACKING: "Slå på sporing av endringer",
    TOGGLE_SHOW: "Slå på sporing av endringer",
    ACCEPT_ALL: "Godta alle endringer",
    REJECT_ALL: "Avslå alle endringer",
    ACCEPT_ONE: "Godta endring",
    REJECT_ONE: "Avslå endring",
    START_TRACKING: "Start sporing av endringer",
    STOP_TRACKING: "Stopp sporing av endringer",
    PENDING_CHANGES: "Dokumentet inneholder endringer som er sporet.\nVennligst løs disse før du slår av sporing av endringer.",
    HIDE_TRACKED: "Skjul sporing av endringer",
    SHOW_TRACKED: "Vis sporing av endringer",
    CHANGE_TYPE_ADDED: "lagt til",
    CHANGE_TYPE_DELETED: "slettet",
    MONTHS: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
    NOW: "nå",
    MINUTE_AGO: "1 minutt siden",
    MINUTES_AGO: "%Minutes minutter siden",
    BY: "av",
    ON: "den",
    AT: "",
    FLITE_LABELS_DATE: function (day, month, year)
    {
        if(typeof(year) != 'undefined') {
            year = ", " + year;
        }
        else {
            year = "";
        }
        return day + ". " + this.MONTHS[month] + year;
    }
});

