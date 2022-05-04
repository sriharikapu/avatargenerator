import { Canvas } from 'canvas';
import { IAvatarBuilder, IImageBuilder, IRandom } from '../common';
/**
 * 9-block Identicon renderer.
 * <p>
 * <p>
 * Current implementation uses only the lower 32 bits of identicon code.
 * </p>
 *
 * @inspired by don for NineBlockIdenticon
 */
export declare class IdenticonImageBuilder implements IImageBuilder {
    private patchSize;
    private backgroundColor;
    constructor(patchSize?: number, backgroundColor?: {
        red: number;
        green: number;
        blue: number;
    });
    buildImage(avatar: IAvatarBuilder, random: IRandom, width: number, height: number): Promise<Canvas>;
    private renderQuilt;
    private drawPatch;
    private drawPath;
    private static getColorDistance;
    private static getComplementaryColor;
}
