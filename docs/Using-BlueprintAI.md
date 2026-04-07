# Using Blueprint AI

Blueprint AI is a flexible AI assistant for CompassCAD. On the end user, it should be expected that everything should work flawlessly.

## Setup

To set up Blueprint AI, you have a file named `.env.example`. Copy that to a file called `.env`. You can do it with so:
```sh
cp .env.example .env
```

There, you will have three fields that you can customize to your own liking or needs.
- `REACT_APP_BLUEPRINT_ENABLED`: Either `true` or `false` (*enclosed in quotes, such as `"true"`*). This option enables Blueprint AI as a whole. **This is just a stateful option, so anyone with more programming knowledge can bypass your options.**
- `REACT_APP_BLUEPRINT_MODEL`: This option specifies what model you will use. Defaults to `qwen/qwen3-32b` when you don't supply this.
- `REACT_APP_BLUEPRINT_API_URL_ENDPOINT`: This option is **required**. This specifies your API endpoint on where your AI instance is hosted, and will handle all requests incoming from the app. **We do not guarantee 100% privacy when using these AI APIs, because your user's messages may be inspected by the AI providers.**
- `REACT_APP_BLUEPRINT_API_KEY`: Only needed if your API endpoint has/requires an API key. It's better to fill it out than to have a non-functioning Blueprint AI.

## Specifications
By default, when sending a new request, CompassCAD will send the following data to your API provider.
```json
{
    "model": "ai_model",
    "input": [
        {
            "type": "message",
            "role": "user | assistant",
            "content": [
                {
                    "type": "input_text | output_text",
                    "text": "User message"
                }
            ]
        }
    ],
    "stream": true,
    "max_output_tokens": 9000
}
```
### Breakdown
CompassCAD's Blueprint request is (partially, somewhat) compatible with Groq's API. If you wish to dig in more, here's a breakdown to understand what these do.
- `model`: This specifies what model to use. You can choose on `.env`
- `input` defines the array of messages with the user and the API. These follow basic [OpenAI API standards](https://developers.openai.com/api/docs/quickstart#analyze-images-and-files).
- `stream` defaults to `true` here to enable streaming.
- `max_output_tokens` defines the maximum token to output. This is hardcoded to limit at 9k tokens.