/// <reference types="node" />
import { IdenticonImageBuilder } from './internal/identicon-avatar';
import LRU from 'lru-cache';
import { IAvatarBuilder, ICache, IColor, IImageBuilder, IMargin, IOptions, IShadow } from './common';
declare namespace Avatar {
    /**
     * Build a avatar builder
     * @param imageBuilder a image builder (use Avatar.Image.)
     * @param width width of avatar result
     * @param height height of avatar result
     * @param options builder options (cache,...)
     */
    function builder(imageBuilder: IImageBuilder, width: number, height: number, options?: IOptions): IAvatarBuilder;
    /**
     * Create a builder for cat avatar
     * @param size width & height of image
     * @param options builder options (cache,...)
     */
    function catBuilder(size?: number, options?: IOptions): IAvatarBuilder;
    /**
     * Create a builder github avatar
     * @param size width & height of image
     * @param precision precision
     * @param options builder options (cache,...)
     */
    function githubBuilder(size?: number, precision?: number, options?: IOptions): IAvatarBuilder;
    /**
     * Create a builder triangle avatar
     * @param size width & height of image
     * @param precision triangle precision
     * @param colors list of colors
     * @param options builder options (cache,...)
     */
    function triangleBuilder(size?: number, precision?: number, colors?: string[], options?: IOptions): IAvatarBuilder;
    /**
     * Create a builder identicon avatar
     * @param size width & height of image
     * @param options builder options (cache,...)
     * @constructor
     */
    function identiconBuilder(size?: number, options?: IOptions): IAvatarBuilder;
    /**
     * Create a builder avatar like min block https://github.com/flouthoc/minBlock.js
     * @param size width & height of image
     * @param precision block number for line
     * @param colors list of colors
     * @param options builder options (cache,...)
     */
    function squareBuilder(size?: number, precision?: number, colors?: string[], options?: IOptions): IAvatarBuilder;
    /**
     * Build avatar with 8bit female
     * @param size width & height of image
     * @param options builder options (cache,...)
     */
    function female8bitBuilder(size?: number, options?: IOptions): IAvatarBuilder;
    /**
     * Build avatar with 8bit male
     * @param size width & height of image
     * @param options builder options (cache,...)
     */
    function male8bitBuilder(size?: number, options?: IOptions): IAvatarBuilder;
    namespace Image {
        /**
         * Compose multi image builder
         * @param imageBuilders image builder to compose (in order)
         */
        function compose(...imageBuilders: IImageBuilder[]): IImageBuilder;
        /**
         * Random choosing avatar (by id)
         * @param imageBuilders
         */
        function random(...imageBuilders: IImageBuilder[]): IImageBuilder;
        /**
         * Add margin to child image builder
         * @param imageBuilder child image builder
         * @param margin size of margin
         */
        function margin(imageBuilder: IImageBuilder, margin?: number | IMargin): IImageBuilder;
        /**
         * Create a image with background fill style
         * @param fillStyle canvas fill style (color, gradient)
         */
        function fillStyle(fillStyle: any): IImageBuilder;
        /**
         * Create a image with background random fill style
         * @param fillStyles canvas fill style (color, gradient)
         */
        function randomFillStyle(fillStyles?: any[]): IImageBuilder;
        /**
         * Create a circle mask with child image
         * @param imageBuilder child image builder
         */
        function circleMask(imageBuilder: IImageBuilder): IImageBuilder;
        /**
         * Create a rounded rect mask with child image
         * @param imageBuilder child image
         * @param radius radius of rounded
         */
        function roundedRectMask(imageBuilder: IImageBuilder, radius?: number): IImageBuilder;
        /**
         * Create a shadow below child image
         * @param imageBuilder child image
         * @param shadow shadow option
         */
        function shadow(imageBuilder: IImageBuilder, shadow?: IShadow): IImageBuilder;
        /**
         * Create a score shadow (half-image shadow)
         * @param imageBuilder child image
         * @param shadowColor shadow color
         */
        function scoreShadow(imageBuilder: IImageBuilder, shadowColor?: IColor): IImageBuilder;
        /**
         * Create a long shadow
         * @param imageBuilder child image
         * @param shadowColor shadow color
         */
        function longShadow(imageBuilder: IImageBuilder, shadowColor?: IColor): IImageBuilder;
        /**
         *
         * @param pathLocation
         * @param groups
         */
        function group(pathLocation: string, groups: string[][]): IImageBuilder;
        /**
         * Identicon image
         * @param patchSize size of patch
         * @param backgroundColor background color
         */
        function identicon(patchSize?: number, backgroundColor?: {
            red: number;
            green: number;
            blue: number;
        }): IdenticonImageBuilder;
        /**
         * Mini block image
         * @param precision number of block by line
         * @param colors list of colors
         */
        function square(precision?: number, colors?: any[]): IImageBuilder;
        /**
         * Triangle image
         * @param precision
         * @param colors list of colors
         */
        function triangle(precision?: number, colors?: any[]): IImageBuilder;
        /**
         * Github image generator
         * @param precision
         */
        function github(precision?: number): IImageBuilder;
        /**
         * Cat avatar image
         */
        function cat(): IImageBuilder;
        /**
         * 8bit male avatar
         */
        function male8bit(): IImageBuilder;
        /**
         * 8bit female avatar
         */
        function female8bit(): IImageBuilder;
        /**
         * Create a grid avatar, call gridx * gridy times iage builder
         * @param imageBuilder
         * @param gridx number of element for x
         * @param gridy number of element for y
         */
        function grid(imageBuilder: IImageBuilder, gridx: number, gridy: number): IImageBuilder;
    }
    namespace Cache {
        /**
         * Memory cache
         */
        function memory(): ICache;
        /**
         * LRU cache
         * @param options
         */
        function lru(options?: LRU.Options<string, Buffer>): ICache;
        /**
         * Folder cache
         * @param location
         */
        function folder(location?: string): ICache;
        /**
         * Compose multi cache
         * @param caches
         */
        function compose(...caches: ICache[]): ICache;
    }
}
export default Avatar;
