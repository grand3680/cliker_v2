let all_ore = document.getElementById("all_ore");

function setupSynth() {
    window.synth = new Tone.Synth({
        oscillator: {
            type: 'sine',
            modulationFrequency: 0.5
        },
        envelope: {
            attack: 0,
            decay: 0.3,
            sustain: 0,
            release: 0.1,
        }
    }).toMaster();
}


function boopMe() {
    if (!window.synth) {
        setupSynth();
    }
    window.synth.triggerAttackRelease(590, '9n');
}

all_ore.addEventListener('touchstart', function(e) {
    e.stopPropagation();
    e.preventDefault();
    boopMe();
});
all_ore.addEventListener('mousedown', boopMe);