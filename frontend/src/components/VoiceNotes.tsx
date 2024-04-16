import { useEffect, useState } from "react";
import axios from "axios";

interface VoiceNote {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

const VoiceNotes = () => {
  const [voiceNotes, setVoiceNotes] = useState<VoiceNote[] | null>([]);

  useEffect(() => {
    const fetchVoiceNotes = async () => {
      try {
        const response = await axios.get<VoiceNote[]>("http://localhost:5000/");
        setVoiceNotes(response.data);
      } catch (error) {
        console.log("Error fetching voicenotes", error);
      }
    };

    fetchVoiceNotes();
  }, []);

  const handleVoiceNote = (voiceNote: VoiceNote) => {
    const { first_name, last_name, email } = voiceNote;

    return (
      <li
        className="text-l font-bold mb-6 "
        key={email}
      >{`${first_name} ${last_name} ${email}`}</li>
    );
  };

  return (
    <div>
      {voiceNotes && (
        <ul className="flex flex-col justify-center items-center">
          {voiceNotes.map(handleVoiceNote)}
        </ul>
      )}
    </div>
  );
};

export default VoiceNotes;
