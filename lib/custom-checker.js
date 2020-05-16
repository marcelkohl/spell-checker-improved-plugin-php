'use babel';

/**
 * The spell checker interface for the custom plugin
 */
export default class CustomChecker {
    constructor(environment) {
        console.log('custom PHP checker constructed ', this.getPluginName())

        let data = require("../data/dictionary.json");

        this.listOfKnownWords = data.dictionary || [];
    }

    getPluginName() {
        return 'spell-checker-improved-plugin-php';
    }

    /**
     * Called every time that a word was considered misspelled by the default spell checker or other plugins
     * @param  {string} wordToCheck
     * @return {boolean} boolean true if word is fine, false if not
     */
    onCheckWord(wordToCheck) {
        return this.listOfKnownWords.indexOf(wordToCheck.toLowerCase()) >= 0
    }

    /**
     * Called every time the user requests for suggestions of a specific misspelled word
     * @param  {string} wordThatNeedsSuggestions
     * @return {string[]} list of suggested words for the parameter word
     */
    onGetSuggestions(wordThatNeedsSuggestions) {
        return [];
    }
}
