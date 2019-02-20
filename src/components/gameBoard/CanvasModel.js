import { types } from 'mobx-state-tree';

export const CanvasModel = types
	.model('CanvasModel', {
        brushColor: types.optional(types.string, 'Black'),
        lineWidth: types.optional(types.number, 3)
	})
	.volatile(()=>({
        canvas: null,
        context: null,
        drawingInProgress: false,
        drawingAllowed: false,
        lastCoordinate: []
    }))
    .extend((self) => {
        return {
            views: {
                isDrawing(){
                    return self.drawingInProgress;
                },

                isDrawingAllowed(){
                    return self.drawingAllowed;
                }
            },
            actions: {
                setCanvas(newCanvas) {
                    self.canvas = newCanvas;
                },

                setContext(newContext) {
                    self.context = newContext;
                },

                setDrawing(isDrawing) {
                    self.drawingInProgress = isDrawing;
                },

                setLastCoordinates(coordinate) {
                    self.lastCoordinate[0] = coordinate[0];
                    self.lastCoordinate[1] = coordinate[1];
                },

                setDrawingAllowed(drawingAllowed) {
                    self.drawingAllowed = drawingAllowed;
                }
            }
        }
    });