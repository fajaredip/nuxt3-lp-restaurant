<template>
	<div class="bg-[#ebe3cd] w-full min-h-svh md:min-h-screen">
		<div class="container py-10 mx-auto">
			<section
				class="bg-[url('/hero.png')] bg-[size:55rem] bg-right bg-no-repeat"
			>
				<header
					class="flex items-center justify-between py-4 text-white bg-black rounded-full px-14"
				>
					<div class="text-xl font-bold font-fair">Logo</div>
					<nav>
						<ul class="flex gap-20">
							<li class="cursor-pointer hover:underline">Home</li>
							<li class="cursor-pointer hover:underline">Menu</li>
							<li class="cursor-pointer hover:underline">
								About Us
							</li>
							<li class="cursor-pointer hover:underline">
								Contact
							</li>
						</ul>
					</nav>
					<button class="text-[#6bb99c] hover:underline">
						Get Started
					</button>
				</header>
				<div
					class="flex flex-col items-start justify-start mt-14 h-[calc(100vh-13rem)] gap-4 max-w-xl"
				>
					<div class="mb-3 text-6xl font-bold font-fair">
						Eat, Drink, and Enjoy
					</div>
					<div class="text-2xl font-semibold">
						Your Restaurant is Waiting For You.
					</div>
					<div class="font-medium">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Ea, inventore. Minima numquam, veritatis maxime
						corporis aliquid dolores distinctio nostrum tenetur ex,
						vero quia amet? Delectus veniam enim quaerat dolorum
						sunt?
					</div>
					<div class="flex gap-5 mt-5">
						<button
							class="py-2 font-medium text-white rounded-full px-7 bg-orange"
						>
							Explore
						</button>
						<button
							class="py-2 font-medium bg-transparent rounded-full px-7 hover:underline"
						>
							See Menu
						</button>
					</div>
				</div>
			</section>
			<section
				class="flex items-end justify-between gap-5 p-10 bg-white rounded-2xl"
			>
				<div class="flex items-center justify-between w-3/4 gap-10">
					<div class="flex flex-col items-start justify-start w-full">
						<label for="" class="mb-1 font-semibold">Date</label>
						<input
							type="text"
							class="px-5 py-3 border border-black w-full rounded-xl bg-[#ebe3cd]"
							v-model="date"
							placeholder="Enter Date..."
						/>
					</div>
					<div class="flex flex-col items-start justify-start w-full">
						<label for="" class="mb-1 font-semibold">Time</label>
						<input
							type="text"
							class="px-5 py-3 border border-black w-full rounded-xl bg-[#ebe3cd]"
							v-model="time"
							placeholder="Enter Time..."
						/>
					</div>
					<div class="flex flex-col items-start justify-start w-full">
						<label for="" class="mb-1 font-semibold">Mail</label>
						<input
							type="text"
							class="px-5 py-3 border border-black w-full rounded-xl bg-[#ebe3cd]"
							v-model="mail"
							placeholder="Enter Mail..."
						/>
					</div>
				</div>
				<button
					class="bg-[#6bb99c] w-1/4 max-w-[15rem] text-white font-medium rounded-xl px-5 py-3"
				>
					Check Availability
				</button>
			</section>
		</div>
		<footer class="bg-[#ff9e1c] w-full text-white">
			<div class="container flex justify-between py-20 mx-auto">
				<div class="flex w-2/3 gap-40">
					<div
						class="flex flex-col items-start justify-between gap-8"
					>
						<div class="text-3xl font-bold font-fair">About</div>
						<ul class="flex flex-col gap-3 text-black">
							<li
								class="font-medium cursor-pointer hover:underline"
							>
								History
							</li>
							<li
								class="font-medium cursor-pointer hover:underline"
							>
								Our Team
							</li>
							<li
								class="font-medium cursor-pointer hover:underline"
							>
								Mission Statement
							</li>
							<li
								class="font-medium cursor-pointer hover:underline"
							>
								Terms & Conditions
							</li>
							<li
								class="font-medium cursor-pointer hover:underline"
							>
								Privacy Policy
							</li>
						</ul>
					</div>
					<div
						class="flex flex-col items-start justify-between gap-8"
					>
						<div class="text-3xl font-bold font-fair">
							What we do
						</div>
						<ul class="flex flex-col gap-3 text-black">
							<li
								class="font-medium cursor-pointer hover:underline"
							>
								News and stories
							</li>
							<li
								class="font-medium cursor-pointer hover:underline"
							>
								Publications
							</li>
							<li
								class="font-medium cursor-pointer hover:underline"
							>
								Take Action
							</li>
							<li
								class="font-medium cursor-pointer hover:underline"
							>
								Recommendations
							</li>
							<li
								class="font-medium cursor-pointer hover:underline"
							>
								Help
							</li>
						</ul>
					</div>
				</div>
				<div class="flex flex-col items-end justify-start w-1/3 gap-8">
					<div class="text-3xl font-bold text-right">
						<p class="font-fair">Sign Up to Receive</p>
						<p class="font-fair">Our Newsletter</p>
					</div>
					<div class="relative w-full">
						<input
							type="text"
							class="w-full px-4 py-4 border border-black rounded-full bg-[#ff9e1c]"
						/>
						<button
							class="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-[#6bb99c] text-white font-medium rounded-full"
						>
							Subscribe
						</button>
					</div>
					<div class="flex items-center gap-10">
						<div class="font-semibold text-black">Follow Us!</div>
						<i class="text-2xl fa-brands fa-facebook"></i>
						<i class="text-2xl fa-brands fa-twitter"></i>
						<i class="text-2xl fa-brands fa-instagram"></i>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>

<script setup>
	const date = ref("");
	const time = ref("");
	const mail = ref("");
</script>
