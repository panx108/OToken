/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/
import { Link } from '@tanstack/react-router'
import { ArrowRight, Activity, Cpu, Gauge, ShieldCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { HeroTerminalDemo } from '../hero-terminal-demo'

interface HeroProps {
  className?: string
  isAuthenticated?: boolean
}

export function Hero(props: HeroProps) {
  const { t } = useTranslation()

  return (
    <section className='relative z-10 overflow-hidden px-6 pt-24 pb-16 md:pt-32 md:pb-24'>
      <div
        aria-hidden
        className='absolute inset-0 -z-20 bg-cover bg-center opacity-55 dark:opacity-65'
        style={{ backgroundImage: "url('/otoken-hero.png')" }}
      />
      <div
        aria-hidden
        className='absolute inset-0 -z-10 bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_oklch,var(--background)_78%,transparent)_28%,color-mix(in_oklch,var(--background)_50%,transparent)_58%,var(--background)_100%)]'
      />
      <div aria-hidden className='otoken-grid absolute inset-0 -z-10 opacity-40' />
      <div
        aria-hidden
        className='absolute inset-x-0 top-1/3 -z-10 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent'
      />

      <div className='mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(480px,1.05fr)]'>
        <div className='flex max-w-3xl flex-col items-start'>
          <div
            className='landing-animate-fade-up border-primary/25 bg-background/55 text-primary inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium shadow-[0_0_24px_-10px_var(--primary)] backdrop-blur-xl'
            style={{ animationDelay: '0ms' }}
          >
            <span className='bg-primary size-1.5 rounded-full shadow-[0_0_12px_var(--primary)]' />
            {t('OToken AI Gateway Console')}
          </div>
          <h1
            className='landing-animate-fade-up mt-6 max-w-3xl text-[clamp(2.4rem,6vw,5.6rem)] leading-[0.95] font-black tracking-tight'
            style={{ animationDelay: '70ms' }}
          >
            {t('Route every model through')}
            <span className='from-primary via-cyan-300 to-emerald-300 block bg-gradient-to-r bg-clip-text text-transparent'>
              {t('one token network')}
            </span>
          </h1>
          <p
            className='landing-animate-fade-up text-muted-foreground/90 mt-6 max-w-xl text-base leading-8 opacity-0 md:text-lg'
            style={{ animationDelay: '140ms' }}
          >
            {t(
              'A high-control AI gateway for model routing, quota governance, realtime billing, and operational telemetry.'
            )}
          </p>
          <div
            className='landing-animate-fade-up mt-8 flex flex-col gap-3 opacity-0 sm:flex-row'
            style={{ animationDelay: '210ms' }}
          >
            {props.isAuthenticated ? (
              <Button
                className='group h-11 rounded-lg bg-cyan-300 px-5 text-slate-950 hover:bg-cyan-200'
                render={<Link to='/dashboard' />}
              >
                {t('Enter OToken Console')}
                <ArrowRight className='ml-1 size-3.5 transition-transform duration-200 group-hover:translate-x-0.5' />
              </Button>
            ) : (
              <>
                <Button
                  className='group h-11 rounded-lg bg-cyan-300 px-5 text-slate-950 shadow-[0_0_32px_-10px_rgba(103,232,249,0.85)] hover:bg-cyan-200'
                  render={<Link to='/sign-up' />}
                >
                  {t('Launch OToken')}
                  <ArrowRight className='ml-1 size-3.5 transition-transform duration-200 group-hover:translate-x-0.5' />
                </Button>
                <Button
                  variant='outline'
                  className='border-cyan-300/25 bg-background/30 h-11 rounded-lg px-5 backdrop-blur-xl hover:border-cyan-200/45 hover:bg-cyan-300/10'
                  render={<Link to='/pricing' />}
                >
                  {t('View Token Plans')}
                </Button>
              </>
            )}
          </div>
          <div
            className='landing-animate-fade-up mt-8 grid w-full max-w-xl grid-cols-2 gap-3 opacity-0 sm:grid-cols-4'
            style={{ animationDelay: '280ms' }}
          >
            {[
              { icon: Activity, label: t('Live Routing') },
              { icon: Cpu, label: t('Model Mesh') },
              { icon: Gauge, label: t('Cost Pulse') },
              { icon: ShieldCheck, label: t('Key Shield') },
            ].map((item) => (
              <div
                key={item.label}
                className='border-border/40 bg-background/35 flex items-center gap-2 rounded-lg border px-3 py-2 text-xs backdrop-blur-xl'
              >
                <item.icon className='text-primary size-3.5' />
                <span className='truncate'>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className='landing-animate-fade-up relative w-full opacity-0'
          style={{ animationDelay: '340ms' }}
        >
          <div className='otoken-glow-card relative overflow-hidden rounded-2xl border border-cyan-200/10 bg-slate-950/70 p-2 backdrop-blur-2xl'>
            <div aria-hidden className='otoken-scanline absolute inset-y-0 left-0 w-1/2' />
            <HeroTerminalDemo />
          </div>
        </div>
      </div>
    </section>
  )
}
