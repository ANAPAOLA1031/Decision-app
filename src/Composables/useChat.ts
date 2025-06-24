import { sleep } from '@/Helpers/Sleep';
import type { ChatMessage } from '@/Interfaces/Chat-message-interface';
import type { YesNoResponse } from '@/Interfaces/yes-no-interface';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

  const getHerResponse = async () => {
    const respuesta = await fetch('https://yesno.wtf/api');
    const data = (await respuesta.json()) as YesNoResponse;
    return data;
  };

  const onMessage = async (text: string) => {
    if (text.length === 0) return;

    messages.value.push({
      id: new Date().getTime(),
      istMine: true,
      message: text,
    });

    if (!text.endsWith('?')) return;

    await sleep(1.5);

    const { answer, image } = await getHerResponse();

    messages.value.push({
      id: new Date().getTime(),
      istMine: false,
      message: answer,
      image: image,
    });
  };

  return {
    // propiededes

    messages,
    //metodos

    onMessage,
  };
};
