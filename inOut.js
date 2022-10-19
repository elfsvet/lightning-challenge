process.stdin.on("data", data => {
    data = data.toString().toUpperCase()
    process.stdout.write(data + "\n")
})