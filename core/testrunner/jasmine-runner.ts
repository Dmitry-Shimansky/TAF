import Jasmine from 'jasmine';
import { SpecReporter, StacktraceOption } from 'jasmine-spec-reporter';
import screenshotReporterJasmine from "../reporter/screenshotReporterJasmine";

const jasmine = new Jasmine();

const specsPaths = [ './test/puppeteer**.spec.ts' ];
jasmine.loadConfig({
    random: false,
    spec_dir: '',
    spec_files: specsPaths,
    helpers: [
        './business/pageobjects/helpers/globalHooks.spec.ts'
    ],
    stopOnSpecFailure: false,
    stopSpecOnExpectationFailure: false,
});

jasmine.clearReporters();
jasmine.addReporter(
    new SpecReporter({
        spec: {
            displayErrorMessages: true,
            displaySuccessful: true,
            displayFailed: true,
            displayPending: true,
            displayDuration: true,
            displayStacktrace: StacktraceOption.PRETTY
        },
        summary: {
            displayErrorMessages: true,
            displaySuccessful: true,
            displayFailed: true,
        },
        colors: {
            enabled: true
        }
    })
);

jasmine.addReporter(screenshotReporterJasmine.screenshotMaker);

(async () => {
    await jasmine.execute(specsPaths);
})();
