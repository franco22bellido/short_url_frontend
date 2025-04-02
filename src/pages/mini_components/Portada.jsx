import { useEffect, useRef, useState } from "react"
import Pause from './svg/Pause';
import Play from './svg/Play';
import GoEnd from './svg/GoEnd';
import GoBack from './svg/GoBack';

const Portada = () => {
  const [playSong, setPlaySong] = useState(false);
  const [songDuration, setSongDuration] = useState(null);
  const [songDurationDecimal, setSongDurationDecimal] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);


  const playAudio = () => {
    setPlaySong(!playSong);
    audioRef.current.play();
    setSongDurationDecimal(audioRef.current.duration);
    setSongDuration(Math.round(audioRef.current.duration - 1));

    if (currentTime > songDuration) {
      goToStart(currentTime)
    }
  };

  const pauseAudio = () => {
    setPlaySong(!playSong);
    audioRef.current.pause();
    
  };
  const goToStart = (seconds) => {
    if (seconds > currentTime) {
      setCurrentTime(currentTime - currentTime);
      audioRef.current.currentTime = audioRef.current.currentTime - currentTime;
    } else {
      setCurrentTime(currentTime - seconds);
      audioRef.current.currentTime = audioRef.current.currentTime - seconds;
    }
  }
  const goToEnd = (seconds) => {
    if (currentTime + seconds >  songDurationDecimal) {
      setCurrentTime(songDurationDecimal);
      audioRef.current.currentTime = songDurationDecimal;
    } else {
      setCurrentTime(currentTime + seconds);
      audioRef.current.currentTime = audioRef.current.currentTime + seconds;
    }
  }

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  const handleAudio = () => {
    if (playSong) {
      pauseAudio();
    }
    else {
      playAudio();
    }
  };
  useEffect(() => {
    console.log("audioRef.current:", audioRef.current);
  }, []); // Se ejecuta cuando el componente se monta

  useEffect(() => {
    if (playSong) {
      const interval = setInterval(() => {
        if (audioRef.current && !audioRef.current.paused) {
          setCurrentTime(Math.round(audioRef.current.currentTime));
        }
      }, 1000); // Actualiza cada segundo

      return () => clearInterval(interval); // Limpiar el intervalo cuando el audio se detiene
    }
  }, [playSong]);
  return (
    <div className="w-100">
      <audio ref={audioRef} controls src="./song1.mp3" hidden={true}></audio>
      <div className="w-full">
        <div className="flex justify-center h-screen bg-red-lightest">
          <div className="bg-white shadow-lg rounded-lg" style={{ width: '45rem' }}>
            <div className="flex flex-col items-center">
              <img className="w-full rounded-xl" src="./portada.jpeg" alt="Album Pic" />
              <div className="w-full p-8">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-2xl text-grey-darkest font-medium">Nadie como tú</h3>
                    <p className="text-sm text-grey mt-1">Junior C ft. Valentino Thompson</p>
                  </div>
                  <div className="text-red-lighter">
                    <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" /></svg>
                  </div>
                </div>
                <div className="flex flex-row justify-center mt-8">
                  <button className="p-5 mx-2 active:bg-slate-400 rounded-full" onClick={() => goToStart(5)}><GoBack/></button>
                  <button className="p-5 mx-2 active:bg-slate-400 rounded-full" onClick={handleAudio}>{playSong ? <Pause/> : <Play/>}</button>
                  <button className="p-5 mx-2 active:bg-slate-400 rounded-full" onClick={() => goToEnd(5)}><GoEnd/></button>
                </div>
              </div>
            </div>
            <div className="mx-8 py-4">
              <div className="flex justify-between text-sm text-grey-darker">
                <p>{formatTime(currentTime)}</p>
                <p>3:05</p>
              </div>
              <div className="mt-2 w-full rounded-full">
                <div className="relative w-full">
                  <div className="bg-red-400 h-1 flex items-center rounded-md relative"
                    style={{ width: `${(currentTime / songDurationDecimal) * 100}%` }}>
                  </div>
                  <div className="w-4 h-4 bg-red-500 rounded-full absolute top-1/2 -translate-y-1/2 left-full"
                    style={{ left: `calc(${(currentTime / songDurationDecimal) * 100}% - 8px)`, zIndex: 10 }}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portada