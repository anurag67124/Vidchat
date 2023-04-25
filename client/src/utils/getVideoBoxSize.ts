export function getVideoBoxSize(
    X: number,
    Y: number,
    n: number,
    aspect_ratio = 1
): { x: number; y: number } {
    
    const tile_count: number = n;
   
    const b: number = Y;
   
    const a: number = X;

   
    let sizeX: number = Math.sqrt((b * a * aspect_ratio) / tile_count);
    
    let numberOfPossibleWholeTilesH: number = Math.floor(
        (b * aspect_ratio) / sizeX
    );
   
    let numberOfPossibleWholeTilesW: number = Math.floor(a / sizeX);
   
    let total: number =
        numberOfPossibleWholeTilesH * numberOfPossibleWholeTilesW;

  
    while (total < tile_count) {
        sizeX--;
        numberOfPossibleWholeTilesH = Math.floor((b * aspect_ratio) / sizeX);
        numberOfPossibleWholeTilesW = Math.floor(a / sizeX);
        total = numberOfPossibleWholeTilesH * numberOfPossibleWholeTilesW;
    }

    return {
        x: sizeX,
        y: sizeX / aspect_ratio,
    };
}
