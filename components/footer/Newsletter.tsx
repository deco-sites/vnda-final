import Text from "$store/components/ui/Text.tsx";

function Newsletter() {
  return (
    <div class="flex flex-col mobile:mb-16 sm:flex-row gap-6 sm:gap-20">
      <div class="flex flex-col gap-2 max-w-[400px] mobile:w-1/2">
        <Text
          variant="heading-2"
          class="uppercase text-[2.2rem]"
          tone="default-inverse"
        >
          Bloco de newsletter
        </Text>
        <Text variant="caption" class="text-[1.4rem]" tone="default-inverse">
          Descrição curta da newsletter em até duas linhas alinhado à esquerda.
        </Text>
      </div>
      <form class="flex mobile:flex-col tablet:flex-row items-center mobile:gap-4 tablet:gap-2 font-body text-body w-full sm:w-[408px]">
        <input
          class="bg-transparent border border-white rounded p-4 text-white placeholder-white mobile:w-full"
          placeholder="Digite seu e-mail..."
        />
        <button
          class="py-2 px-8 bg-transparent rounded uppercase text-white mobile:w-full border border-white rounded"
          type="button" // prevent form's default behavior
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
