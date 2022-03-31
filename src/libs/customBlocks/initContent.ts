import Blockly from "blockly";
export const INITIAL_XML = '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>';
export const INITIAL_TOOLBOX_JSON = {
    kind: "categoryToolbox",
    contents: [
        {
            kind: "category",
            name: "World",
            colour: 120,
            contents: [
                { kind: "block", type: "direction" },
                { kind: "block", type: "starttimer" },
                { kind: "block", type: "elapsedtime" },
                { kind: "block", type: "millis" },
                { kind: "block", type: "copyFile" },
                {
                    kind: "category",
                    name: "Scoreboard",
                    contents: [
                        { kind: "block", type: "getnewboard" },
                        { kind: "block", type: "scoreboardtitle" },
                        { kind: "block", type: "setscore" },
                    ],
                },
                {
                    kind: "category",
                    name: "Blocks",
                    contents: [
                        { kind: "block", type: "lookingat" },
                        { kind: "block", type: "clickedBlock" },
                        { kind: "block", type: "blocktype" },
                        { kind: "block", type: "getblocktype" },
                        { kind: "block", type: "changeBlock" },
                        { kind: "block", type: "blockfacingdirection" },
                        { kind: "block", type: "blockfacing" },
                        { kind: "block", type: "setblockface" },
                        { kind: "block", type: "blockface" },
                        { kind: "block", type: "reverseface" },
                        { kind: "block", type: "blocksradius" },
                        { kind: "block", type: "isopen" },
                        {
                            kind: "category",
                            name: "Location",
                            contents: [
                                { kind: "block", type: "getBlock" },
                                { kind: "block", type: "spawnblock" },
                                { kind: "block", type: "fill" },
                                { kind: "block", type: "blockatlocation" },
                                { kind: "block", type: "blockinradius" },
                            ],
                        },
                        {
                            kind: "category",
                            name: "Command Block",
                            contents: [
                                { kind: "block", type: "setblockcommand" },
                                { kind: "block", type: "setconditional" },
                            ],
                        },
                        {
                            kind: "category",
                            name: "Sign",
                            contents: [
                                { kind: "block", type: "signtext" },
                                { kind: "block", type: "getsignline" },
                                { kind: "block", type: "signfacing" },
                            ],
                        },
                        {
                            kind: "category",
                            name: "Structures",
                            contents: [
                                { kind: "block", type: "structures" },
                                { kind: "block", type: "buildstructure" },
                            ],
                        },
                        {
                            kind: "category",
                            name: "Door",
                            contents: [{ kind: "block", type: "setdoor" }],
                        },
                        {
                            kind: "category",
                            name: "Cake",
                            contents: [
                                { kind: "block", type: "cakeslicesremaining" },
                            ],
                        },
                    ],
                },
                {
                    kind: "category",
                    name: "Location",
                    contents: [
                        { kind: "block", type: "absolutelocation" },
                        { kind: "block", type: "locationadd" },
                        { kind: "block", type: "modplayerlocation" },
                        { kind: "block", type: "changelocation" },
                        { kind: "block", type: "updatelocation" },
                        { kind: "block", type: "snaplocation" },
                        { kind: "block", type: "distancebetweenlocations" },
                        { kind: "block", type: "locationof" },
                        { kind: "block", type: "islocation" },
                    ],
                },
                {
                    kind: "category",
                    name: "Events",
                    colour: 40,
                    contents: [
                        { kind: "block", type: "actiontype" },
                        { kind: "block", type: "eventlistener" },
                        { kind: "block", type: "eventinfo" },
                        { kind: "block", type: "eventcancel" },
                        { kind: "block", type: "cancelfriendlydamage" },
                        { kind: "block", type: "isjumping" },
                    ],
                },
                {
                    kind: "category",
                    name: "Effects",
                    colour: 120,
                    contents: [
                        { kind: "block", type: "killplayer" },
                        { kind: "block", type: "lightning" },
                        { kind: "block", type: "instantteleport" },
                        { kind: "block", type: "teleport" },
                        { kind: "block", type: "moveto" },
                        { kind: "block", type: "settime" },
                        { kind: "block", type: "gettime" },
                        { kind: "block", type: "setstorm" },
                        { kind: "block", type: "fireworks" },
                        { kind: "block", type: "ability" },
                    ],
                },
                {
                    kind: "category",
                    name: "Vector",
                    colour: 40,
                    contents: [
                        { kind: "block", type: "createvector" },
                        { kind: "block", type: "vector2points" },
                        { kind: "block", type: "multiplyvector" },
                        { kind: "block", type: "getvectorvelocity" },
                        { kind: "block", type: "setvectorvelocity" },
                        { kind: "block", type: "vectortoyaw" },
                        { kind: "block", type: "locationtovector" },
                        { kind: "block", type: "normalizevector" },
                    ],
                },
                {
                    kind: "category",
                    name: "Server",
                    contents: [
                        { kind: "block", type: "bordercenter" },
                        { kind: "block", type: "bordersize" },
                        { kind: "block", type: "servercommand" },
                        { kind: "block", type: "setgamemode" },
                        { kind: "block", type: "spawnarea" },
                    ],
                },
            ],
        },
        {
            kind: "category",
            name: "Entities",
            colour: 0,
            contents: [
                { kind: "block", type: "whichplayer" },
                { kind: "block", type: "getentitytype" },
                { kind: "block", type: "islivingentity" },
                { kind: "block", type: "entitydead" },
                { kind: "block", type: "allentities" },
                { kind: "block", type: "spawnentity" },
                { kind: "block", type: "spawnarrow" },
                { kind: "block", type: "entityname" },
                { kind: "block", type: "tameentity" },
                { kind: "block", type: "attackentity" },
                { kind: "block", type: "nearbyentities" },
                { kind: "block", type: "findentitybyname" },
                { kind: "block", type: "findentitybycustomname" },
                { kind: "block", type: "findcustomname" },
                { kind: "block", type: "findentitybylocation" },
                { kind: "block", type: "assigndamage" },
                {
                    kind: "category",
                    name: "AllPlayers",
                    contents: [
                        { kind: "block", type: "allplayers" },
                        { kind: "block", type: "removeplayersdata" },
                        { kind: "block", type: "removeplayersgear" },
                        { kind: "block", type: "allplayerssetscore" },
                        { kind: "block", type: "allplayersmessage" },
                        { kind: "block", type: "playernearby" },
                        { kind: "block", type: "activeteams" },
                    ],
                },
                {
                    kind: "category",
                    name: "Effects",
                    contents: [
                        { kind: "block", type: "entityeffect" },
                        { kind: "block", type: "playeffect" },
                        { kind: "block", type: "soundeffect" },
                        { kind: "block", type: "playsound" },
                    ],
                },
                {
                    kind: "category",
                    name: "Player",
                    contents: [
                        { kind: "block", type: "setplayerhealth" },
                        { kind: "block", type: "healthofplayer" },
                        { kind: "block", type: "iteminhandis" },
                        { kind: "block", type: "playerhas" },
                        { kind: "block", type: "isplayer" },
                        { kind: "block", type: "isspectator" },
                        { kind: "block", type: "updateplayersinventory" },
                        { kind: "block", type: "playerpointed" },
                        { kind: "block", type: "setinhand" },
                        { kind: "block", type: "invincibility" },
                        { kind: "block", type: "playerinbox" },
                        { kind: "block", type: "playerinsphere" },
                        { kind: "block", type: "playeronground" },
                        {
                            kind: "category",
                            name: "Hotbar",
                            contents: [
                                { kind: "block", type: "counthotbar" },
                                { kind: "block", type: "clearhotbar" },
                                { kind: "block", type: "sethotbar" },
                                { kind: "block", type: "removeitemhotbar" },
                            ],
                        },
                    ],
                },
                {
                    kind: "category",
                    name: "Projectiles",
                    contents: [
                        { kind: "block", type: "projectileentity" },
                        { kind: "block", type: "isarrow" },
                        { kind: "block", type: "issnowball" },
                        { kind: "block", type: "launchprojectile" },
                        { kind: "block", type: "customizefirework" },
                        { kind: "block", type: "setprojectilespeed" },
                        { kind: "block", type: "getshooter" },
                    ],
                },
                {
                    kind: "category",
                    name: "Creatures",
                    contents: [
                        { kind: "block", type: "entity" },
                        { kind: "block", type: "entityType" },
                        { kind: "block", type: "tocreature" },
                        { kind: "block", type: "modifyEntity" },
                        { kind: "block", type: "setName" },
                        { kind: "block", type: "entityProfession" },
                        { kind: "block", type: "entityArmor" },
                        { kind: "block", type: "baby" },
                        { kind: "block", type: "setpassenger" },
                        { kind: "block", type: "offai" },
                    ],
                },
            ],
        },
        {
            kind: "category",
            name: "Data",
            contents: [
                {
                    kind: "category",
                    name: "Global",
                    contents: [
                        { kind: "block", type: "setglobal" },
                        { kind: "block", type: "globalvariable" },
                    ],
                },
                {
                    kind: "category",
                    name: "Block",
                    contents: [
                        { kind: "block", type: "setblockdata" },
                        { kind: "block", type: "getblockdata" },
                        { kind: "block", type: "existsblockdata" },
                    ],
                },
                {
                    kind: "category",
                    name: "Entity",
                    contents: [
                        { kind: "block", type: "setallplayersdata" },
                        { kind: "block", type: "existsplayerdata" },
                        { kind: "block", type: "setplayerdata" },
                        { kind: "block", type: "getplayerdata2" },
                        { kind: "block", type: "playerdataeq" },
                        { kind: "block", type: "removeplayerdata" },
                    ],
                },
                { kind: "block", type: "dataexpression" },
                { kind: "block", type: "datavalue" },
                { kind: "block", type: "namevalue" },
                { kind: "block", type: "namevaluevariable" },
                { kind: "block", type: "getnamestructure" },
                { kind: "block", type: "namevaluestructure" },
            ],
        },
        {
            kind: "category",
            name: "Items",
            colour: "320",
            contents: [
                { kind: "block", type: "updateinventory" },
                { kind: "block", type: "clearinventory" },
                { kind: "block", type: "nameofitem" },
                { kind: "block", type: "materialtype" },
                { kind: "block", type: "eggtype" },
                { kind: "block", type: "randomizechests" },
                { kind: "block", type: "playerinventory" },
                { kind: "block", type: "getdurability" },
                { kind: "block", type: "setdurability" },
                {
                    kind: "category",
                    name: "Stack",
                    contents: [
                        { kind: "block", type: "itemstack" },
                        { kind: "block", type: "setstackname" },
                        { kind: "block", type: "namethestack" },
                        { kind: "block", type: "nameofstack" },
                        { kind: "block", type: "materialdata" },
                        { kind: "block", type: "dropitem" },
                        { kind: "block", type: "stackinoffhand" },
                        { kind: "block", type: "stacklength" },
                        { kind: "block", type: "decrementstack" },
                    ],
                },
                {
                    kind: "category",
                    name: "Potions",
                    contents: [
                        { kind: "block", type: "addeffecttopotion" },
                        { kind: "block", type: "addpotioneffect" },
                        { kind: "block", type: "whicheffect" },
                        { kind: "block", type: "randompotioneffect" },
                        { kind: "block", type: "potionname" },
                        { kind: "block", type: "giverandompotion" },
                    ],
                },
                {
                    kind: "category",
                    name: "Area Effect Cloud",
                    contents: [
                        { kind: "block", type: "addcustomeffect" },
                        { kind: "block", type: "setduration" },
                        { kind: "block", type: "setcloudradius" },
                    ],
                },
                {
                    kind: "category",
                    name: "Gear",
                    contents: [
                        { kind: "block", type: "equipmentname" },
                        { kind: "block", type: "getcolor" },
                        { kind: "block", type: "playerinventory" },
                        { kind: "block", type: "getplayerarmor" },
                        { kind: "block", type: "removearmor" },
                        { kind: "block", type: "removeallarmor" },
                        { kind: "block", type: "getequipmentname" },
                        { kind: "block", type: "givearmor" },
                        { kind: "block", type: "armorset" },
                        { kind: "block", type: "equipmentslot" },
                    ],
                },
                {
                    kind: "category",
                    name: "Special Weapons",
                    contents: [
                        { kind: "block", type: "m1garand" },
                        { kind: "block", type: "minigun" },
                    ],
                },
                {
                    kind: "category",
                    name: "Recipes",
                    contents: [
                        { kind: "block", type: "addingredient" },
                        { kind: "block", type: "recipe" },
                    ],
                },
                {
                    kind: "category",
                    name: "Map",
                    contents: [
                        { kind: "block", type: "basicrenderfunction" },
                        { kind: "block", type: "mapRenderer" },
                        { kind: "block", type: "drawImage" },
                        { kind: "block", type: "drawText" },
                    ],
                },
                {
                    kind: "category",
                    name: "Playing Cards",
                    contents: [
                        { kind: "block", type: "createdeck" },
                        { kind: "block", type: "dealcard" },
                        { kind: "block", type: "sumcards" },
                        { kind: "block", type: "blackjackdealer" },
                    ],
                },
            ],
        },
        {
            kind: "category",
            name: "Output",
            colour: 160,
            contents: [
                { kind: "block", type: "consolelog" },
                { kind: "block", type: "echowidget" },
                { kind: "block", type: "sendmessage" },
                { kind: "block", type: "title" },
                { kind: "block", type: "sendUdpMessage" },
            ],
        },
        {
            kind: "category",
            name: "Scriptcraft Coding",
            colour: "120",
            contents: [
                { kind: "block", type: "scriptcraftexpression" },
                {
                    kind: "category",
                    name: "Functions",
                    contents: [
                        { kind: "block", type: "scriptcraftfunction" },
                        { kind: "block", type: "functionCall" },
                        { kind: "block", type: "functioncallreturn" },
                        { kind: "block", type: "repeatexecution" },
                        { kind: "block", type: "delayedexecution" },
                        { kind: "block", type: "hasfunction" },
                        { kind: "block", type: "returnVariable" },
                    ],
                },
                {
                    kind: "category",
                    name: `${Blockly.Msg.catVariables}`,
                    contents: [
                        { kind: "block", type: "varname" },
                        { kind: "block", type: "setvariable" },
                        { kind: "block", type: "setvariablevalue" },
                        { kind: "block", type: "runexpression" },
                    ],
                },
                {
                    kind: "category",
                    name: `${Blockly.Msg.catLoops}`,
                    contents: [
                        { kind: "block", type: "foreachloop" },
                        {
                            kind: "block",
                            blockxml: `
                            <block type="controls_repeat_ext">
                                <value name="TIMES">
                                <shadow type="math_number">
                                    <field name="NUM">10</field>
                                </shadow>
                                </value>
                            </block>
                        `,
                        },
                        { kind: "block", type: "controls_whileUntil" },
                        { kind: "block", type: "forlistdo" },
                        { kind: "block", type: "forchinstring" },
                        { kind: "block", type: "breakoutofloop" },
                    ],
                },
                {
                    kind: "category",
                    name: "File I/O",
                    contents: [{ kind: "block", type: "fileExists" }],
                },
            ],
        },
        {
            kind: "category",
            name: `${Blockly.Msg.catText}`,
            colour: 160,
            contents: [
                { kind: "block", type: "text" },
                { kind: "block", type: "tostring" },
                { kind: "block", type: "text_join" },
                {
                    kind: "block",
                    blockxml: `
                    <block type="text_append">
                        <value name="TEXT">
                        <shadow type="text"></shadow>
                        </value>
                    </block>
                `,
                },
                {
                    kind: "block",
                    blockxml: `
                    <block type="text_isEmpty">
                        <value name="VALUE">
                        <shadow type="text">
                            <field name="TEXT"></field>
                        </shadow>
                        </value>
                    </block>
                `,
                },
                {
                    kind: "block",
                    blockxml: `
                    <block type="text_indexOf">
                        <value name="VALUE">
                        <block type="variables_get">
                            <field name="VAR">{textVariable}</field>
                        </block>
                        </value>
                        <value name="FIND">
                        <shadow type="text">
                            <field name="TEXT">abc</field>
                        </shadow>
                        </value>
                    </block>
                `,
                },
                {
                    kind: "block",
                    blockxml: `
                    <block type="text_charAt">
                        <value name="VALUE">
                        <block type="variables_get">
                            <field name="VAR">{textVariable}</field>
                        </block>
                        </value>
                    </block>
                `,
                },
                {
                    kind: "block",
                    blockxml: `
                    <block type="text_getSubstring">
                        <value name="STRING">
                        <block type="variables_get">
                            <field name="VAR">{textVariable}</field>
                        </block>
                        </value>
                    </block>
                `,
                },

                {
                    kind: "block",
                    blockxml: `
                    <block type="text_changeCase">
                        <value name="TEXT">
                        <shadow type="text">
                            <field name="TEXT">abc</field>
                        </shadow>
                        </value>
                    </block>
                `,
                },
                {
                    kind: "block",
                    blockxml: `
                    <block type="text_getSubstring">
                        <value name="STRING">
                        <block type="variables_get">
                            <field name="VAR">{textVariable}</field>
                        </block>
                        </value>
                    </block>
                `,
                },
                {
                    kind: "block",
                    blockxml: `
                    <block type="text_trim">
                        <value name="TEXT">
                        <shadow type="text">
                            <field name="TEXT">abc</field>
                        </shadow>
                        </value>
                    </block>
                `,
                },
                {
                    kind: "block",
                    blockxml: `
                    <block type="text_prompt_ext">
                        <value name="TEXT">
                        <shadow type="text">
                            <field name="TEXT">abc</field>
                        </shadow>
                        </value>
                    </block>
                `,
                },
            ],
        },
        {
            kind: "category",
            name: `${Blockly.Msg.catLogic}`,
            colour: 210,
            contents: [
                { kind: "block", type: "controls_if" },
                { kind: "block", type: "logic_compare" },
                { kind: "block", type: "logic_operation" },
                { kind: "block", type: "logic_negate" },
                { kind: "block", type: "logic_boolean" },
                { kind: "block", type: "logic_null" },
                { kind: "block", type: "isnull" },
            ],
        },
        {
            kind: "category",
            name: `${Blockly.Msg.catMath}`,
            colour: "230",
            contents: [
                { kind: "block", type: "math_number" },
                { kind: "block", type: "randomnumber" },
                { kind: "block", type: "incrementdecrement" },
                {
                    kind: "block",
                    blockxml: `
                    <block type="math_arithmetic">
                        <value name="A">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                        </value>
                        <value name="B">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                        </value>
                    </block>
                `,
                },
                {
                    kind: "block",
                    blockxml: `
                    <block type="math_single">
                        <value name="NUM">
                        <shadow type="math_number">
                            <field name="NUM">9</field>
                        </shadow>
                        </value>
                    </block>
                `,
                },
                {
                    kind: "block",
                    blockxml: `
                    <block type="math_trig">
                        <value name="NUM">
                        <shadow type="math_number">
                            <field name="NUM">45</field>
                        </shadow>
                        </value>
                    </block>
                `,
                },
                {
                    kind: "block",
                    blockxml: `<block type="math_constant"></block>`,
                },
                {
                    kind: "block",
                    blockxml: `
                    <block type="math_number_property">
                        <value name="NUMBER_TO_CHECK">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                        </value>
                    </block>
                `,
                },
                {
                    kind: "block",
                    blockxml: `
                    <block type="math_round">
                        <value name="NUM">
                        <shadow type="math_number">
                            <field name="NUM">3.1</field>
                        </shadow>
                        </value>
                    </block>
                `,
                },
                {
                    kind: "block",
                    blockxml: `
                    <block type="math_on_list"></block>
                `,
                },
                {
                    kind: "block",
                    blockxml: `
                    <block type="math_modulo">
                        <value name="DIVIDEND">
                        <shadow type="math_number">
                            <field name="NUM">64</field>
                        </shadow>
                        </value>
                        <value name="DIVISOR">
                        <shadow type="math_number">
                            <field name="NUM">10</field>
                        </shadow>
                        </value>
                    </block>
                `,
                },
                {
                    kind: "block",
                    blockxml: `
                    <block type="math_constrain">
                        <value name="VALUE">
                        <shadow type="math_number">
                            <field name="NUM">50</field>
                        </shadow>
                        </value>
                        <value name="LOW">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                        </value>
                        <value name="HIGH">
                        <shadow type="math_number">
                            <field name="NUM">100</field>
                        </shadow>
                        </value>
                    </block>
                `,
                },
            ],
        },
        {
            kind: "category",
            name: `${Blockly.Msg.catLists}`,
            colour: 260,
            contents: [
                { kind: "block", type: "countcondition" },
                {
                    kind: "block",
                    blockxml: `
                    <block type="lists_create_with">
                        <mutation items="0"></mutation>
                    </block>
                `,
                },
                { kind: "block", type: "lists_create_with" },
                { kind: "block", type: "randomlistitem" },
                { kind: "block", type: "valueinlist" },
                {
                    kind: "block",
                    blockxml: `
                    <block type="lists_repeat">
                        <value name="NUM">
                        <shadow type="math_number">
                            <field name="NUM">5</field>
                        </shadow>
                        </value>
                    </block>
                `,
                },
                { kind: "block", type: "lists_length" },
                { kind: "block", type: "lists_isEmpty" },
                { kind: "block", type: "deletefromlist" },
                {
                    kind: "block",
                    blockxml: `
                    <block type="lists_indexOf">
                        <value name="VALUE">
                        <block type="variables_get">
                            <field name="VAR">${Blockly.Msg.listVariable}</field>
                        </block>
                        </value>
                    </block>
                `,
                },
                { kind: "block", type: "pushlist" },
                {
                    kind: "block",
                    blockxml: `
                    <block type="lists_getIndex">
                        <value name="VALUE">
                        <block type="variables_get">
                            <field name="VAR">${Blockly.Msg.listVariable}</field>
                        </block>
                        </value>
                    </block>
                `,
                },
                {
                    kind: "block",
                    blockxml: `
                    <block type="lists_setIndex">
                        <value name="LIST">
                        <block type="variables_get">
                            <field name="VAR">${Blockly.Msg.listVariable}</field>
                        </block>
                        </value>
                    </block>
                `,
                },
                {
                    kind: "block",
                    blockxml: `
                    <block type="lists_getSublist">
                        <value name="LIST">
                        <block type="variables_get">
                            <field name="VAR">${Blockly.Msg.listVariable}</field>
                        </block>
                        </value>
                    </block>
                `,
                },
                {
                    kind: "block",
                    blockxml: `
                    <block type="lists_split">
                        <value name="DELIM">
                        <shadow type="text">
                            <field name="TEXT">,</field>
                        </shadow>
                        </value>
                    </block>
                `,
                },
            ],
        },
        {
            kind: "category",
            name: "classes",
            colour: 260,
            contents: [
                {
                    kind: "category",
                    name: "Class 1 - Listeners, Variables, Messages to Users",
                    contents: [
                        { kind: "block", type: "scriptcraftexpression" },
                        { kind: "block", type: "varname" },
                        { kind: "block", type: "setvariablevalue" },
                        { kind: "block", type: "consolelog" },
                        { kind: "block", type: "eventlistener" },
                        { kind: "block", type: "eventinfo" },
                        { kind: "block", type: "eventcancel" },
                        { kind: "block", type: "sendmessage" },
                        { kind: "block", type: "title" },
                    ],
                },
            ],
        },
    ],
};
