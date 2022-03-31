export const INITIAL_XML = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';

export const INITIAL_TOOLBOX_JSON = {
    kind: "categoryToolbox",
    contents: [{
        kind: "category",
        name: "World",
        colour: 120,
        contents: [
            {kind: "block", type: "direction"},
            {kind: "block", type: "starttimer"},
            {kind: "block", type: "elapsedtime"},
            {kind: "block", type: "millis"},
            {kind: "block", type: "copyFile"},
            {
                kind: "category",
                name: "Scoreboard",
                contents: [
                    {kind: "block", type: "getnewboard"},
                    {kind: "block", type: "scoreboardtitle"},
                    {kind: "block", type: "setscore"},
                ]
            },
            {
                kind: "category",
                name: "Blocks",
                contents: [
                    {kind: "block", type: "lookingat"},
                    {kind: "block", type: "clickedBlock"},
                    {kind: "block", type: "blocktype"},
                    {kind: "block", type: "getblocktype"},
                    {kind: "block", type: "changeBlock"},
                    {kind: "block", type: "blockfacingdirection"},
                    {kind: "block", type: "blockfacing"},
                    {kind: "block", type: "setblockface"},
                    {kind: "block", type: "blockface"},
                    {kind: "block", type: "reverseface"},
                    {kind: "block", type: "blocksradius"},
                    {kind: "block", type: "isopen"},
                    {
                        kind: "category",
                        name: "Location",
                        contents: [
                            {kind: "block", type: "getBlock" },
                            {kind: "block", type: "spawnblock" },
                            {kind: "block", type: "fill" },
                            {kind: "block", type: "blockatlocation" },
                            {kind: "block", type: "blockinradius" }
                        ]
                    },
                    {
                        kind: "category",
                        name: "Command Block",
                        contents: [
                            {kind: "block", type: "setblockcommand" },
                            {kind: "block", type: "setconditional" },
                        ]
                    }
                ]
            }
        ]
    }],
}