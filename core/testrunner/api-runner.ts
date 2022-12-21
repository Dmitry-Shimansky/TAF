import Mocha from 'mocha';
import {flattenDeep} from "lodash";
import {lookupFiles} from 'mocha/lib/cli';

function runMocha(mocha: Mocha) {
    return new Promise((resolve) => {
        mocha.run(failures => resolve(failures));
    });
};

(async () => {
    try {
        const specsPaths = [ './test/api/**/*.spec.ts' ];
        const mocha = new Mocha({
            timeout: 250000,
            reporter: 'spec',
        });
        const specs = flattenDeep(specsPaths.map((spec) => lookupFiles(spec)));
        specs.forEach((spec: string) => {
            mocha.addFile(spec);
        });
        const failures = await runMocha(mocha);
        process.exit(failures ? 1 : 0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}) ();
