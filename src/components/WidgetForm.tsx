import {CloseButton} from './CloseButton'

import bugImageUrl from './../assets/Bug.svg';
import ideaImageUrl from './../assets/Idea.svg';
import otherImageUrl from './../assets/Thought.svg';
import { useState } from 'react';

const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image:{
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Problema',
        image:{
            source: ideaImageUrl,
            alt: 'Imagem de uma lampada'
        }
    },
    OTHER:{
        title: 'Outros',
        image:{
            source: otherImageUrl,
            alt: 'Imagem de uma pensamento'
        }
    }
};

type FeedbackType = keyof typeof feedbackTypes;

export function WidgetFrom (){
    const [ feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
        
        <header>
            <span className="text-xl leading-6 ">Deixe seu Feedback</span>
            <CloseButton />
        </header>

       {!feedbackType ? (
        <div className="flex py-8 gap-2 w-full">
            { Object.entries(feedbackTypes).map(([key,value])=>{
                return (
                    <button
                        key = {key}
                        className="bg-zinc-800 rounded-lg w-24 flex flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                        onClick = {() => setFeedbackType(key as FeedbackType)}
                    >
                        <img src={value.image.source} alt={value.image.alt} />
                        <span>{value.title}</span>
                    </button>
                );
            }) }
        </div>
       ) : (
           <p>Hello World</p>
       )}
        <footer className="text-xs text-neutral-400"> 
            Feito com amor S2 <a className="underline underline-offset-2" href="https://www.google.com"> Google </a>
        </footer>
        </div>
    );
}