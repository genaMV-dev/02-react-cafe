import CafeInfo from "./components/CafeInfo/CafeInfo"
import "./App.css"
import type { Votes, VoteType } from "./types/vote";
import { useState } from "react";
import VoteOptions from "./components/VoteOptions/VoteOptions";
import VoteStats from "./components/VoteStats/VoteStats";
import Notification from "./components/Notification/Notification";

function App() {
    const [votes, setVotes] = useState<Votes>({
        good: 0,
        neutral: 0,
        bad: 0
    });

    const handleVote = (type: VoteType) => {
        setVotes(prev => ({
            ...prev,
            [type]: prev[type] + 1
        }));
    };

    const resetVotes = () => {
        setVotes({
            good: 0,
            neutral: 0,
            bad: 0
        });
    };

    const canReset = votes.good > 0 || votes.neutral > 0 || votes.bad > 0;

    return(<div className="app">
        <CafeInfo/>
        <VoteOptions 
            onVote={handleVote} 
            onReset={resetVotes} 
            canReset={canReset}
        />
        {votes.good + votes.neutral + votes.bad > 0 && <VoteStats votes={votes} totalVotes={0} positiveRate={0}/>}
        {votes.good + votes.neutral + votes.bad === 0 && <Notification/>}
    </div>)
}



export default App
