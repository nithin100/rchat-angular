export class Conversation {

    conversation_Id: number;
    participant1UserName: string;
    participant2UserName: string;
    numberOfUnreadMessages: string;
    lastMessageSentAt: string;
    secondParticipant: string;

    public Conversation(conversation_Id: number, participant1UserName: string, participant2UserName: string, numberOfUnreadMessages: string,
        lastMessageSentAt: string, secondParticipant: string) {
        this.conversation_Id = conversation_Id;
        this.participant1UserName = participant1UserName;
        this.participant2UserName = participant2UserName;
        this.numberOfUnreadMessages = numberOfUnreadMessages;
        this.lastMessageSentAt = lastMessageSentAt;
        this.secondParticipant = secondParticipant;
    }

}