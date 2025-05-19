
i18next.use(i18nextBrowserLanguageDetector);
i18next.init({
    lang: 'en',
    // fallbacklang: 'en',
    resources: {
        cn: aessence_translation_dict_cn,
        bm: aessence_translation_dict_bm,
        en: aessence_translation_dict_en,
       
    }

}, function (err, t) {
    updateContent();

});

function updateContent() {
    var allEl = document.getElementsByClassName("trans"); 

    for (var i = 0, m = allEl.length; i < m; i++) {
    
        var el = allEl[i];
        var d = el.attributes["aessence-translate-key"].value;
        el.innerHTML = i18next.t(d);
    }
    
}

i18next.on('languageChanged', () => {
    updateContent();


});

