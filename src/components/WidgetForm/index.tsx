import bugImageUrl from '../../assets/Bug.svg';
import ideaImageUrl from '../../assets/Idea.svg';
import otherImageUrl from '../../assets/Thought.svg';
import { useState } from 'react';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSucessStep } from './Steps/FeedbackSucessStep';

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lampada'
        }
    },
    OTHER: {
        title: 'Outros',
        image: {
            source: otherImageUrl,
            alt: 'Imagem de uma pensamento'
        }
    }
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetFrom() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState<true | false>(false);
    function handRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }
    function sendFeedback(){
        setFeedbackSent(true);
    }
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent ? (
                <FeedbackSucessStep onFeedbackRestarRequested={handRestartFeedback} />
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep
                            feedbackType={feedbackType}
                            onFeedRestartRequest={handRestartFeedback}
                            onFeedbackSent={() => sendFeedback()}
                        />
                    )}
                </>
            )}
            <footer className="text-xs text-neutral-400">
                Feito com ♥ pelo <a className="underline underline-offset-2" href="https://github.com/natanMoutinho"> nataN </a>
            </footer>
        </div>
    );
}