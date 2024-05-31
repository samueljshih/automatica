import { useEffect, useState } from "react";
import axios from "axios";

import Table from "./Table";

export interface VoiceNote {
  user_id: number;
  audio_url: string;
  summary: string;
  transcription: string;
}

interface User {
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
        console.log("Fetching...");
        const response = await axios.get<VoiceNote[]>("http://localhost:5000/");
        setVoiceNotes(response.data);
      } catch (error) {
        console.log("Error fetching voicenotes", error);
      }
    };

    fetchVoiceNotes();
  }, []);

  return <div>{voiceNotes && <Table data={voiceNotes} />}</div>;
};

export default VoiceNotes;
