import { NextApiRequest, NextApiResponse } from 'next';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

const sendMessage = async (text: string) => {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: text,
        }),
    });
    return res.json();
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;

        if (!email || !name || !message) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        try {
            const text = `New contact form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
            await sendMessage(text);
            return res.status(200).json({ message: 'Message sent successfully' });
        } catch (error) {
            return res.status(500).json({ message: 'Failed to send message', error });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
