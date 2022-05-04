import { Canvas } from 'canvas';
import { IAvatarBuilder, IImageBuilder, IRandom } from '../common';
export declare class GithubImageBuilder implements IImageBuilder {
    private precision;
    constructor(precision?: number);
    buildImage(avatar: IAvatarBuilder, random: IRandom, width: number, height: number): Promise<Canvas>;
}
