import { types } from 'mobx-state-tree';

export const TimerModel = types
	.model('TimerModel', {
        timeLimit: types.optional(types.number, 30),
        timerOn: types.optional(types.boolean, false)
	})
	.volatile(()=>({
        onTimerEndFunction: null
    }))
    .extend((self) => {
        return {
            views: {
                getTimeLimit(){
                    return self.timeLimit;
                }
            },
            actions: {
                startTimer(){
                    self.timer = setInterval(() => {
                        self.setTimeLimit(self.timeLimit-1);
                        if(self.timeLimit === 0) {
                            clearInterval(self.timer);
                            self.onTimerEnd();
                        }
                    }, 1000);
                },

                setTimeLimit(newLimit) {
                    self.timeLimit = newLimit;
                },

                setOnTimerEnd(onTimerEnd) {
                    self.onTimerEndFunction = onTimerEnd;
                },
        
                onTimerEnd(){
                    self.onTimerEndFunction();
                }
            }
        }
    });