import { injectable } from "inversify";
import wellnessPackage from "../../models/implementations/wellness-package.model";
import { IWellnessPackage } from "../../models/interfaces/IWellness-package.model";
import { BaseRepository } from "../base.repository";
import { IWellnessPackageRepository } from "../interfaces/IWellness-package.repository";

@injectable()
export class WellnessPackageRepository extends BaseRepository<IWellnessPackage> implements IWellnessPackageRepository {
    constructor(){
        super(wellnessPackage);
    }
}