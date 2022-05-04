import { GroupImageBuilder } from './core-avatar';
export declare class EightBitImageBuilder extends GroupImageBuilder {
    constructor(sexe: 'female' | 'male');
}
export declare class FemaleEightBitImageBuilder extends EightBitImageBuilder {
    constructor();
}
export declare class MaleEightBitImageBuilder extends EightBitImageBuilder {
    constructor();
}
