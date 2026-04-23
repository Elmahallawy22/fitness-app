import { useTranslations } from "use-intl";
import { ChevronRight } from "lucide-react";

/**
 * PreviousConversations Component - Dropdown list of past conversations
 *
 * Displays a scrollable list of previous chat conversations with
 * static data positioned at top-left of the chat modal.
 *
 * @component
 * @example
 * <PreviousConversations />
 */

// Static conversation data - Replace with API call later
const PREVIOUS_CONVERSATIONS = [
  {
    id: "1",
    preview: "Lorem 123t",
  },
  {
    id: "2",
    preview: "Lorem ipsum adfdsg dolor sit amet",
  },
  {
    id: "3",
    preview: "Lorem ipsum d5234444234olor sit amet",
  },
  {
    id: "4",
    preview: "Lorem i3or sit amet",
  },
  {
    id: "5",
    preview: "Lorem ipsum234r sit amet",
  },
  {
    id: "6",
    preview: "Lorem ifgr sit amet",
  },
  {
    id: "7",
    preview: "Lorem ipsum dolor wqeqwe sit amet",
  },
  {
    id: "8",
    preview: "Lorem ipsum dolorfff f wqwd sit amet",
  },
  {
    id: "9",
    preview: "Lorem ipsum doloasf  fsar sit amet",
  },
  {
    id: "10",
    preview: "Lorem ipsum dolor sit amet",
  },
];

type ConversationItem = (typeof PREVIOUS_CONVERSATIONS)[0];

/**
 * Individual conversation item renderer
 */
function ConversationItem({
  conversation,
}: {
  conversation: ConversationItem;
}) {
  return (
    <button
      className="w-full flex items-center justify-between  py-3 hover:bg-white/5 transition-colors  group cursor-pointer"
      aria-label={`Load conversation: ${conversation.preview}`}
    >
      <div className="flex-1 text-start">
        <p className="text-white/80 text-xs group-hover:text-white transition-colors">
          {conversation.preview}
        </p>
      </div>

      <ChevronRight
        size={18}
        className="text-primary/60 group-hover:text-primary transition-colors ml-3 shrink-0"
      />
    </button>
  );
}

//  Main PreviousConversations component
export default function PreviousConversations() {
  const t = useTranslations("Chat");

  return (
    <div className="bg-linear-to-b from-white/5 w-65.75 h-71 py-6 px-4 to-white/0 rounded-2xl border border-white/10 backdrop-blur-xl  flex flex-col ">
      {/* Header */}
      <div className=" pb-6 ">
        <h3 className="text-white font-semibold text-xl font-baloo text-center tracking-tight">
          {t("previousConversations")}
        </h3>
      </div>

      {/* Conversations List  */}
      <div className="flex-1 overflow-y-auto divide-y divide-white/5 scrollbar-hidden">
        {PREVIOUS_CONVERSATIONS.map((conversation) => (
          <ConversationItem key={conversation.id} conversation={conversation} />
        ))}
      </div>
    </div>
  );
}
