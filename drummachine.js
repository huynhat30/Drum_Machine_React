
const firstSoundsGroup = [
  {
    keyCode: 81,
    key: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    key: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    key: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    key: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    key: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    key: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    key: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    key: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    key: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const secondSoundsGroup = [
  {
    keyCode: 81,
    key: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    key: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    key: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    key: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    key: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    key: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    key: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    key: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    key: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];

const Keys = ({ playKey, keys: {id, url, key, keyCode} }) => {

  const handleEvent = (e) => {
    if(e.keyCode === keyCode) {
      playKey(key, id)
    }
  }

  React.useEffect(() => {
    document.addEventListener("keydown", handleEvent)
  })

   return (
   <button className="drum-pad" id={id} onClick={() => playKey(key, id)}>
      <span>{key}</span>
      <audio className="clip" src={url} id={key}/>
   </button>
   )
}


const Keyboard = ({ playThisKey, soundGroups }) => {
  return soundGroups.map((thisKeyElements) => 
    {
      return (
          <Keys playKey={playThisKey} keys={thisKeyElements}/>
      )
    }
  )
}

const App = () => {
  const [getSoundGroup, setSoundGroup] = React.useState(firstSoundsGroup);
  const [getGroupName, setGroupName] = React.useState("Heater Kit");
  const [getSoundName, setSoundName] = React.useState('');

  const changeGroupEvent = () => {
    if (getSoundGroup === firstSoundsGroup){
      setGroupName("Piano Kit");
      setSoundGroup(secondSoundsGroup);
      setSoundName(getSoundGroup.id);
    }
    else {
      setGroupName("Heater Kit");
      setSoundGroup(firstSoundsGroup);
      setSoundName(getSoundGroup.id);
    }
  }

  const playFunc = (key, soundName) => {
    setSoundName(soundName);
    document.getElementById(key).play()
  }

    return (
        <div id="drum-machine">
            <div id="display">
                <h2>{getGroupName}</h2>
                <p id="keyName">{getSoundName}</p>

               {/*<input max="1" min="0" step="0.01" type="range" value={} onChange={}/> */} 

                <Keyboard playThisKey={playFunc} soundGroups={getSoundGroup}/>

              <div id="changeGroupBtn">
                <button onClick={changeGroupEvent}>Change group</button>
              </div>
            </div>
            <div class="footer">By <a href="https://github.com/huynhat30">Huy Giang <i class="fa fa-github"></i></a></div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))