import { Canvas } from 'canvas';
import { IAvatarBuilder, IImageBuilder, IRandom } from '../common';
export declare class TriangleImageBuilder implements IImageBuilder {
    private precision;
    private colors;
    constructor(precision?: number, colors?: any[]);
    buildImage(avatar: IAvatarBuilder, random: IRandom, width: number, height: number): Promise<Canvas>;
    private static drawTriangle;
}
