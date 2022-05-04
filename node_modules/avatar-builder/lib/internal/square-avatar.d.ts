import { Canvas } from 'canvas';
import { IAvatarBuilder, IImageBuilder, IRandom } from '../common';
/**
 * Build avatar image like min block https://github.com/flouthoc/minBlock.js
 */
export declare class SquareImageBuilder implements IImageBuilder {
    private precision;
    private colors;
    constructor(precision?: number, colors?: any[]);
    buildImage(avatar: IAvatarBuilder, random: IRandom, width: number, height: number): Promise<Canvas>;
}
