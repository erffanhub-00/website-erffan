---

title: "What Is DNS and How Does It Work?"
date: 2026-09-19
category: Networks
tags: ["dns", "networking", "internet", "debugging"]
description: "A practical introduction to DNS, how domain names become IP addresses, and how to troubleshoot common DNS problems."
readingTime: 6
draft: false
------------

When you type `google.com` into your browser, your computer needs to find the server's IP address before it can connect to it.

That is where **DNS** comes in.

DNS stands for **Domain Name System**. It translates human-readable domain names such as `google.com` into IP addresses such as `142.250.185.14`.

Without DNS, we would have to remember IP addresses for every website we wanted to visit.

## Why Do We Need DNS?

Computers communicate using IP addresses, but humans prefer names.

For example:

```text
google.com
```

is much easier to remember than:

```text
142.250.185.14
```

DNS acts like a distributed directory for the Internet.

A simplified process looks like this:

```text
You type a domain
       ↓
DNS resolver
       ↓
DNS server
       ↓
IP address
       ↓
Your browser connects to the server
```

## How DNS Resolution Works

When you request a domain, your computer usually does not immediately ask a root DNS server.

There are several layers involved.

### 1. Local Cache

Your operating system may already know the IP address.

Browsers, operating systems, and DNS resolvers can cache DNS responses.

If the answer is already cached, the lookup can be completed much faster.

### 2. DNS Resolver

If the answer is not available locally, your device asks a DNS resolver.

Your Internet provider may provide a resolver automatically, but you can also use public resolvers.

For example:

| Provider   | DNS Server |
| ---------- | ---------- |
| Cloudflare | `1.1.1.1`  |
| Google     | `8.8.8.8`  |
| Quad9      | `9.9.9.9`  |

The resolver does the work of finding the answer for your device.

### 3. Root DNS Servers

If the resolver does not already know the answer, it can ask a root DNS server.

The root servers do not normally provide the final IP address.

Instead, they point the resolver toward the appropriate **Top-Level Domain (TLD)** server.

For example:

```text
example.com
       ↓
Root
       ↓
.com TLD
```

### 4. Authoritative DNS Server

The resolver eventually reaches the authoritative DNS server for the domain.

This server contains the actual DNS records for the domain.

For example:

```text
example.com → 203.0.113.10
```

The resolver returns the result to your computer.

## Common DNS Record Types

DNS supports different types of records.

### A Record

An `A` record maps a domain name to an IPv4 address.

```text
example.com → 203.0.113.10
```

### AAAA Record

An `AAAA` record maps a domain to an IPv6 address.

```text
example.com → 2001:db8::10
```

### CNAME Record

A `CNAME` creates an alias for another domain.

```text
www.example.com → example.com
```

### MX Record

An `MX` record specifies which mail servers handle email for a domain.

```text
example.com → mail.example.com
```

### TXT Record

TXT records can contain text information used for different purposes, including domain verification and email security systems.

## Checking DNS From the Command Line

You do not need a complicated tool to inspect DNS.

On Windows, you can use:

```powershell
nslookup example.com
```

On Linux and macOS, you can use:

```bash
dig example.com
```

You can also query a specific DNS resolver.

For example:

```bash
dig @1.1.1.1 example.com
```

This asks Cloudflare's DNS resolver for the domain.

## A Simple DNS Troubleshooting Workflow

When a website does not open, DNS is one of the things worth checking.

Start with the domain:

```bash
nslookup example.com
```

If you receive an IP address, DNS resolution is working at least at that level.

Then test connectivity:

```bash
ping example.com
```

You can also compare different DNS resolvers:

```text
Your ISP DNS
     ↓
Cloudflare DNS
     ↓
Google DNS
```

If one resolver returns an answer while another does not, the problem may be related to DNS configuration, caching, propagation, or the resolver itself.

## DNS Cache

DNS responses are normally cached for a period of time.

The duration is controlled by a value called **TTL**.

For example:

```text
TTL: 3600
```

means the response can generally be cached for 3600 seconds.

Caching reduces DNS traffic and makes repeated lookups faster.

However, caching can sometimes make DNS changes appear to take time to reach every user.

## DNS Is Not the Same as Internet Connectivity

A very common mistake is assuming that if a domain does not open, the Internet connection itself must be broken.

Consider this:

```text
Internet connection
       ↓
DNS resolution
       ↓
TCP connection
       ↓
TLS
       ↓
HTTP
       ↓
Application
```

A failure at any of these layers can prevent a website from working.

For example:

* DNS can fail while the Internet connection is working.
* DNS can work while TCP connection fails.
* TCP can work while TLS fails.
* TLS can work while the application returns an error.

This is why network debugging should be done layer by layer.

## Useful Commands

Here is a small command-line toolkit for DNS debugging.

```bash
# Windows
nslookup example.com

# Linux / macOS
dig example.com

# Query Cloudflare DNS
dig @1.1.1.1 example.com

# Query Google's DNS
dig @8.8.8.8 example.com
```

On Windows, you can also clear the local DNS cache:

```powershell
ipconfig /flushdns
```

After clearing the cache, try the lookup again.

## Final Checklist

When troubleshooting a DNS problem, check these things in order:

1. Can your device reach the Internet?
2. Does the domain resolve?
3. Does another DNS resolver return the same result?
4. Are the DNS records configured correctly?
5. Is the DNS response cached?
6. Can you establish a TCP connection?
7. Does TLS work?
8. Does the HTTP server respond?

> DNS is only one part of the connection. A successful DNS lookup does not guarantee that the website itself is working.

## Conclusion

DNS is one of the fundamental systems behind the Internet.

Its main job is simple:

```text
Domain name → IP address
```

But behind that simple idea is a distributed system involving caches, resolvers, root servers, TLD servers, and authoritative DNS servers.

Understanding DNS is especially useful when debugging network problems because it lets you separate **name resolution problems** from problems occurring later in the connection.

Once you understand that distinction, commands like `nslookup` and `dig` become much more useful than simply checking whether a website opens in your browser.
