import { ISimpleService } from "./iservice";


export class SimpleServiceImpl implements ISimpleService {
    constructor() {
        //simple service constructor
    }

    ok(): string {
        return "OK";
    }
}