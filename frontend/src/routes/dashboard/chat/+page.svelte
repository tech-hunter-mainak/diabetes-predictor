<script lang="ts">
	let messages: { type: 'user' | 'bot'; content: string; image?: string }[] = [];
	let input = '';
	let imageFile: File | null = null;
	let previewUrl: string | null = null;
	let sending = false;
	let isBotTyping = false;

	// Send message
	async function sendMessage() {
		if (!input && !imageFile) return;

		sending = true;
		isBotTyping = false;

		// Add user message
		messages = [
			...messages,
			{
				type: 'user',
				content: input,
				image: imageFile ? URL.createObjectURL(imageFile) : undefined
			}
		];

		// Reset input and preview
		input = '';
		imageFile = null;
		previewUrl = null;

		scrollToBottom();

		// Bot typing animation ON
		isBotTyping = true;

		setTimeout(() => {
			isBotTyping = false;
			messages = [
				...messages,
				{
					type: 'bot',
					content: 'This is a medical bot response. Your message has been received.'
				}
			];
			sending = false;
			scrollToBottom();
		}, 1500);
	}

	// Handle image selection
	function handleFileChange(e: Event) {
		const target = e.target as HTMLInputElement;
		if (target.files && target.files[0]) {
			imageFile = target.files[0];
			previewUrl = URL.createObjectURL(target.files[0]);
		}
	}

	// Clear image preview
	function clearImage() {
		imageFile = null;
		previewUrl = null;
	}

	let chatContainer: HTMLDivElement;

	function scrollToBottom() {
		setTimeout(() => {
			chatContainer?.scrollTo({ top: chatContainer.scrollHeight, behavior: 'smooth' });
		}, 50);
	}
</script>

<style>
	/* Triple-dot typing animation */
	.typing {
		display: flex;
		gap: 6px;
	}
	.typing div {
		width: 8px;
		height: 8px;
		background: #6b7280;
		border-radius: 50%;
		animation: blink 1.4s infinite both;
	}
	.typing div:nth-child(2) { animation-delay: 0.2s; }
	.typing div:nth-child(3) { animation-delay: 0.4s; }

	@keyframes blink {
		0% { opacity: .2; }
		20% { opacity: 1; }
		100% { opacity: .2; }
	}
</style>

<div class="flex h-screen flex-col bg-green-50">
	<!-- Header -->
	<div class="flex items-center justify-between bg-green-600 px-6 py-4 text-white shadow-md">
		<h1 class="text-lg font-semibold">Medical Chat Bot</h1>
		<span class="text-sm opacity-90">Support Assistant</span>
	</div>

	<!-- Chat window -->
	<div
		bind:this={chatContainer}
		class="scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-green-50 flex-1 space-y-4 overflow-y-auto px-6 py-4"
	>
		{#each messages as msg}
			<div class="flex {msg.type === 'user' ? 'justify-end' : 'justify-start'}">
				<div
					class="max-w-[80%] rounded-xl p-4 break-words shadow-md
						{msg.type === 'user'
						? 'rounded-br-none bg-green-600 text-white'
						: 'rounded-bl-none border border-green-200 bg-white text-gray-700'}"
				>
					{#if msg.image}
						<img
							src={msg.image}
							alt="uploaded"
							class="mb-2 max-h-60 w-auto rounded object-contain"
						/>
					{/if}
					<p>{msg.content}</p>
				</div>
			</div>
		{/each}

		<!-- BOT TYPING INDICATOR -->
		{#if isBotTyping}
			<div class="flex justify-start">
				<div class="max-w-[80%] rounded-xl border border-green-200 bg-white p-4 shadow-md">
					<div class="typing">
						<div></div><div></div><div></div>
					</div>
				</div>
			</div>
		{/if}
	</div>

	<!-- Image preview box -->
	{#if previewUrl}
		<div class="flex items-center gap-3 border-t border-green-200 bg-white p-3">
			<img src={previewUrl} class="h-16 w-16 rounded object-cover border" />
			<button on:click={clearImage} class="text-red-600 text-2xl font-bold leading-none">×</button>
		</div>
	{/if}

	<!-- Input area -->
	<div class="flex items-center gap-2 border-t border-green-200 bg-white px-4 py-3 md:gap-4">
		<input
			type="text"
			bind:value={input}
			placeholder="Type your message..."
			class="flex-1 rounded-xl border border-green-300 px-4 py-2 focus:border-green-500 focus:ring focus:ring-green-200 focus:outline-none"
			on:keydown={(e) => e.key === 'Enter' && sendMessage()}
		/>

		<label class="cursor-pointer text-green-600 transition-colors hover:text-green-800">
			<input type="file" accept="image/*" on:change={handleFileChange} class="hidden" />
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="currentColor"
				viewBox="0 0 24 24"
			>
				<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
			</svg>
		</label>

		<button
			on:click={sendMessage}
			class="rounded-xl bg-green-600 px-4 py-2 font-medium text-white transition-colors hover:bg-green-700 disabled:bg-green-400"
			disabled={sending}
		>
			{sending ? 'Sending...' : 'Send'}
		</button>
	</div>
</div>
