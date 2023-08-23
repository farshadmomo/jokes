import Jokes from "./components/jokes";
export default function App() {
    return (
        <div>
            <Jokes
                setup="Why do fathers take an extra pair of socks when they go golfing?"
                punchline="In case they get a hole in one!"/>
            <Jokes
                setup="What do you call a factory that makes okay products?"
                punchline="A satisfactory."/>
            <Jokes
                setup="What did the janitor say when he jumped out of the closet?"
                punchline="Supplies!"/>
            <Jokes
                setup="What did the ocean say to the beach?"
                punchline="Nothing, it just waved."/>
            <Jokes
                setup="Why do seagulls fly over the ocean?"
                punchline="Because if they flew over the bay, we'd call them bagels."/>

        </div>
    );
}
